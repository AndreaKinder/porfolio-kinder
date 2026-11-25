---
layout: ../../layouts/Layout.astro
title: "Memoria persistente de 5 capas en SQLite para modelos locales: cómo funciona kinder-agent"
author: Andrea Villar
date: "2026-10-29"
description: Arquitectura del motor de memoria jerárquica de cinco capas en SQLite, FTS5 y destilación asíncrona en Bash para ejecutar agentes conversacionales en Ollama con ventanas de contexto reducidas.
---

## 1. El límite físico de los modelos locales

Ejecutar modelos de lenguaje en local garantiza soberanía de datos y coste marginal cero, pero impone límites físicos estrictos. Cuando trabajas con modelos ligeros (como `gemma3:4b` o `qwen2.5-coder:7b` a través de Ollama) en ventanas de contexto ajustadas (`4096` tokens) para mantener baja la latencia y el consumo de VRAM, el enfoque habitual de concatenar todo el historial de la conversación en cada petición deja de ser viable a los pocos turnos.

Si envías toda la transcripción en bruto, saturas la ventana de contexto y degradas la atención del modelo; si truncas sin más los mensajes antiguos, el asistente pierde el hilo y olvida quién eres o qué decisiones técnicas habéis tomado minutos antes.

Para resolver esa tensión sin introducir frameworks pesados en Python ni servidores de bases de datos vectoriales, construí **[`kinder-agent`](https://github.com/AndreaKinder/kinder-agent)**: un REPL interactivo escrito en Bash que implementa un motor de memoria jerárquica de cinco capas sobre SQLite, búsqueda de texto completo (`FTS5`) y destilación asíncrona.

```text
┌──────────────────────────────────────────────────────────────┐
│                     Entrada del Usuario                      │
└──────────────┬───────────────────────────────────────────────┘
               │
               ├──► 1. Guarda mensaje en `messages` (Capa 1)
               │
               ├──► 2. Ensambla Payload en RAM (`memory_build_payload`)
               │       ├─ Consulta `profile` (Capa 3)
               │       ├─ Búsqueda FTS5 en `facts_fts` (Capa 4)
               │       ├─ Búsqueda FTS5 en `context_cards_fts` (Capa 2)
               │       ├─ Última entrada de `diary` (Capa 5)
               │       └─ Ventana deslizante estricta (`SLIDING_WINDOW`)
               │
               ├──► 3. Respuesta en streaming vía Ollama (`/api/chat`)
               │
               └──► 4. Destilación en segundo plano (`memory_distill_turn &`)
                       ├─ Extrae perfil y hechos en JSON (`/api/generate`)
                       └─ Compacta bloques antiguos en `context_cards`
```

---

## 2. El criterio de diseño: descomponer el estado en lugar de inflar el prompt

La mayoría de las conversaciones técnicas mezclan información con distinta vida útil:

- **Contexto inmediato:** las últimas réplicas literales necesarias para seguir el hilo actual.
- **Decisiones de bloques anteriores:** problemas ya resueltos en la misma sesión que no necesitan ocupar decenas de líneas en bruto.
- **Identidad y entorno del usuario:** sistema operativo, herramientas habituales o preferencias que rara vez cambian.
- **Hechos puntuales:** eventos o datos concretos ligados a una fecha.
- **Continuidad entre sesiones:** qué se hizo en la última sesión de trabajo antes de cerrar la terminal.

Tratar estas cinco categorías como una única lista lineal de mensajes (`messages[]`) desperdicia tokens. En [`kinder-agent`](https://github.com/AndreaKinder/kinder-agent), el módulo `memory.sh` inicializa una base de datos SQLite en modo `WAL` (`PRAGMA journal_mode = WAL;`) y separa el estado en cinco estructuras independientes:

| Capa | Tabla SQLite | Índice / Modo | Propósito y retención |
|------|--------------|---------------|-----------------------|
| **1. Conversación** | `messages` | Ventana deslizante | Transcripción literal; solo se inyectan los últimos `sliding_window` mensajes no compactados. |
| **2. Fichas de contexto** | `context_cards` | `context_cards_fts` (FTS5) | Resúmenes comprimidos de bloques antiguos cuando se supera `chunk_threshold`. |
| **3. Retrato del usuario** | `profile` | Clave primaria (`UPSERT`) | Atributos permanentes del entorno y preferencias del usuario. |
| **4. Hechos fechados** | `facts` | `facts_fts` (FTS5) | Eventos y decisiones puntuales con marca temporal. |
| **5. Diario de sesión** | `diary` | Orden cronológico | Síntesis generada al cerrar el REPL para conservar continuidad entre ejecuciones. |

---

## 3. Funcionamiento interno de las 5 capas

### Capa 1: Conversación en bruto y ventana deslizante (`messages`)
Cada mensaje del usuario y del asistente se guarda íntegramente en la tabla `messages` junto con el identificador de sesión (`session_id`) y una bandera `compacted` (por defecto `0`). Sin embargo, al construir el payload para Ollama, el agente nunca vuelca toda la tabla: aplica una ventana deslizante estricta (`sliding_window: 6`) que selecciona únicamente los últimos mensajes no compactados de la sesión activa.

### Capa 2: Fichas de contexto comprimidas (`context_cards` + `context_cards_fts`)
Para que los mensajes que salen de la ventana deslizante no desaparezcan de la memoria, existe un umbral de compactación (`chunk_threshold: 8`). Cuando el número de mensajes activos sin compactar alcanza ese límite, la función `memory_compact_chunk` toma la mitad más antigua (`chunk_size = 4`), solicita al modelo un resumen técnico de una o dos frases junto con sus palabras clave en formato JSON estricto, e inserta el resultado en `context_cards`.

Acto seguido, marca esos mensajes originales con `compacted = 1`. Un trigger de SQLite indexa automáticamente el resumen y las palabras clave en la tabla virtual `context_cards_fts` mediante **FTS5**:

```sql
CREATE VIRTUAL TABLE IF NOT EXISTS context_cards_fts USING fts5(
    summary,
    keywords,
    content='context_cards',
    content_rowid='id'
);

CREATE TRIGGER IF NOT EXISTS context_cards_ai AFTER INSERT ON context_cards BEGIN
    INSERT INTO context_cards_fts(rowid, summary, keywords)
    VALUES (new.id, new.summary, new.keywords);
END;
```

### Capa 3: El retrato del usuario (`profile`)
La tabla `profile` funciona como un almacén clave-valor persistente (`key TEXT PRIMARY KEY, value TEXT`). Guarda atributos estables del usuario (por ejemplo, distribución de Linux, gestor de ventanas o herramientas principales). Cuando el motor detecta un dato permanente nuevo, ejecuta un `INSERT ... ON CONFLICT(key) DO UPDATE`, manteniendo una radiografía actualizada y muy compacta que ocupa apenas unas líneas en el prompt del sistema.

### Capa 4: Hechos fechados (`facts` + `facts_fts`)
A diferencia del perfil, los hechos puntuales o decisiones concretas se almacenan en `facts` con su marca temporal (`created_at`) y se indexan mediante un segundo índice **FTS5** (`facts_fts`). Esto permite recuperar tanto hechos relevantes para la consulta actual como los eventos más recientes.

### Capa 5: Diario automatizado (`diary`)
Al salir del REPL (`exit`, `quit` o `EOF`), el hook `on_exit` espera a que terminen las tareas en segundo plano y ejecuta `memory_write_diary`. Esta función toma el historial de la sesión que termina, genera una síntesis de una o dos frases y la guarda en la tabla `diary`. En la siguiente sesión, esa última entrada se inyecta como contexto de continuidad.

---

## 4. Recuperación léxica con FTS5 y ensamblado en RAM

Antes de cada petición a `/api/chat`, la función `memory_build_payload` construye dinámicamente el prompt del sistema sin escribir archivos temporales en disco:

1. **Extracción de términos:** `memory_build_fts_query` limpia la puntuación de la pregunta del usuario, filtra las palabras de cuatro o más caracteres y construye una consulta booleana unida por `OR`.
2. **Consulta selectiva a las capas:**
   - Extrae todas las claves de `profile`.
   - Busca en `facts_fts` hasta 4 hechos que coincidan con los términos de la pregunta (si no hay coincidencias léxicas, recurre a los 4 hechos más recientes).
   - Busca en `context_cards_fts` hasta 2 fichas de contexto relevantes (o las 2 más recientes como respaldo).
   - Recupera la última entrada de `diary`.
3. **Inyección y serialización:** Con `jq -n`, combina el `system_prompt` base con los bloques recuperados (`[RETRATO DEL USUARIO]`, `[HECHOS CONOCIDOS CON FECHA]`, `[FICHAS DE CONTEXTO RELEVANTES]`, `[ÚLTIMA ENTRADA DEL DIARIO]`) y concatena el array JSON de la ventana deslizante obtenido directamente desde `sqlite3 -json`.

De este modo, aunque la base de datos acumule cientos de mensajes a lo largo de semanas, el modelo recibe en cada turno un contexto acotado y predecible que cabe holgadamente en `4096` tokens.

---

## 5. Destilación asíncrona: aprender sin bloquear la terminal

El principal escollo de los sistemas que extraen memoria mediante LLMs es la latencia: si el usuario tiene que esperar a que el modelo responda y, además, a que una segunda llamada analice la conversación y resuma bloques antiguos, la experiencia interactiva se rompe.

En [`kinder-agent`](https://github.com/AndreaKinder/kinder-agent), la lectura y escritura están desacopladas en el bucle principal de `repl.sh`:

```bash
# 4. Guardar respuesta del asistente en Capa 1
memory_add_message "assistant" "$full_reply"

# 5. Destilación en segundo plano (actualiza Perfil, Hechos y Fichas sin bloquear el REPL)
memory_distill_turn "$user_input" "$full_reply" >/dev/null 2>&1 &
```

En cuanto termina el streaming de la respuesta principal, el prompt (`Tú ›`) se libera inmediatamente para el usuario mientras `memory_distill_turn` se ejecuta en un subproceso en segundo plano (`&`):

1. Realiza una llamada sin streaming a `/api/generate` con `format: "json"` y `temperature: 0.1`, pidiendo extraer únicamente datos permanentes para `profile` o hechos puntuales para `facts`.
2. Si el modelo devuelve datos nuevos, los inserta en SQLite; si devuelve listas vacías, no ensucia la base de datos.
3. Comprueba el contador de mensajes no compactados de la sesión y, si alcanza `CHUNK_THRESHOLD`, dispara `memory_compact_chunk`.

Gracias a que SQLite opera con `journal_mode = WAL` (*Write-Ahead Logging*), estas escrituras en segundo plano no bloquean las lecturas del turno siguiente.

---

## 6. Código y repositorio

El proyecto completo consta únicamente de cuatro archivos (`repl.sh`, `memory.sh`, `theme.sh` y `model.json`) y requiere tan solo `bash`, `sqlite3`, `jq`, `curl` y una instancia local de Ollama.

Puedes consultar el código fuente, la configuración y el esquema SQLite en el repositorio oficial: [`AndreaKinder/kinder-agent`](https://github.com/AndreaKinder/kinder-agent).
