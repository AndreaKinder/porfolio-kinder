# AGENTS.md — Pipeline editorial de artículos del portfolio

Este repositorio contiene el portfolio y blog personal de **Andrea Villar** (Astro 5). Además del código de la web, define un pipeline multi-agente para investigar, redactar, revisar y publicar artículos en el blog manteniendo el rigor factual y la voz de la autora.

Cualquier agente o asistente (OpenCode, Claude Code, Cursor, Codex, Antigravity…) que opere sobre este repositorio para crear o publicar artículos debe seguir este flujo.

---

## 1. Arquitectura de archivos del pipeline

```text
AGENTS.md                      # Este archivo: flujo completo y reglas del repositorio
guia-de-estilo.md              # Guía canónica de voz, estructura, frontmatter y formato
agents/                        # Definiciones canónicas de cada rol (portables)
  investigador.md              #   1. Búsqueda web, verificación de fuentes y dossier
  redactor.md                  #   2. Redacción del borrador a partir del dossier + guía de estilo
  editor.md                    #   3. Revisión de calidad, pulido in situ e informe de revisión
drafts/<slug>/                 # (Ignorado por git) Espacio de trabajo de cada artículo en curso
  investigacion.md             #   Salida de investigador
  borrador.md                  #   Salida de redactor (editada in situ por editor)
  revision.md                  #   Salida de editor (checklist, cambios y veredicto)
src/pages/blog/<slug>.md       # Artículos publicados (autolistados por src/pages/galery-blog.astro)
.opencode/                     # Cableado nativo para OpenCode (permisos, modos y comandos /articulo y /publicar)
```

> **Regla crítica del repositorio:** `src/pages/galery-blog.astro` publica automáticamente todo archivo `.md` dentro de `src/pages/blog/` mediante `Astro.glob("./blog/*.md")`. **Nunca** crees ni edites borradores dentro de `src/pages/blog/`. Todo el trabajo previo ocurre en `drafts/<slug>/` hasta que la autora apruebe publicar.

---

## 2. Flujo del pipeline: de la idea al artículo

### Fase A — Creación y revisión (`/articulo <tema> [idioma]` o petición en lenguaje natural)

Cuando la autora pide escribir un artículo sobre un `<tema>` (y opcionalmente un idioma: `es` por defecto, `ca` o `en`), el agente coordinador ejecuta **en serie** estos 3 pasos delegando en el subagente correspondiente (o ejecutando el contrato de cada archivo `agents/<rol>.md` si la herramienta no soporta subagentes dedicados):

1. **Investigación (`agents/investigador.md`)**
   - Entrada: `tema` e `idioma` (`es` | `ca` | `en`).
   - Lee `guia-de-estilo.md`, propone un `<slug>` en `kebab-case` (2–4 palabras ASCII) e investiga en la web priorizando fuentes primarias verificadas con fetch.
   - Salida: `drafts/<slug>/investigacion.md` (ficha, resumen ejecutivo, puntos clave con citas, datos/ejemplos, ángulos, esquema H2 numerado y fuentes verificadas).
2. **Redacción (`agents/redactor.md`)**
   - Entrada: `slug`, `idioma` y (si es una iteración) `feedback`.
   - Lee `guia-de-estilo.md` y `drafts/<slug>/investigacion.md`. No inventa hechos ni URLs fuera del dossier.
   - Salida: `drafts/<slug>/borrador.md` con el frontmatter obligatorio de Astro y secciones `##` numeradas.
3. **Edición y control de calidad (`agents/editor.md`)**
   - Entrada: `slug` e `idioma`.
   - Contrasta `drafts/<slug>/borrador.md` contra `guia-de-estilo.md` y `drafts/<slug>/investigacion.md`.
   - Corrige in situ en `borrador.md` todo lo no controvertido (ortografía, formato, frontmatter, numeración, enlaces) y documenta el resultado en `drafts/<slug>/revision.md` (checklist, cambios aplicados, decisiones pendientes y veredicto: `publicable` | `con cambios` | `no publicable`).
4. **Entrega al autor (Checkpoint único)**
   - El coordinador detiene el flujo y presenta a la autora un resumen ejecutivo junto con las rutas `drafts/<slug>/borrador.md` y `drafts/<slug>/revision.md`, destacando las decisiones pendientes si las hay.

### Fase B — Iteración con feedback

Si la autora pide cambios tras revisar el borrador:
1. El coordinador **relanza a `redactor`** (`agents/redactor.md`) pasándole el `slug` y el `feedback` concreto de la autora.
2. Seguidamente **relanza a `editor`** (`agents/editor.md`) para validar el nuevo borrador y actualizar `drafts/<slug>/revision.md`.
3. Devuelve el resumen actualizado a la autora.

### Fase C — Publicación (`/publicar <slug>` o confirmación explícita)

Solo cuando la autora ordena publicar un `<slug>`:
1. **Verificar existencia**: comprobar que existe `drafts/<slug>/borrador.md` y leer `drafts/<slug>/revision.md`.
2. **Validar frontmatter**: asegurar que `drafts/<slug>/borrador.md` comienza por `---` y contiene exactamente las claves requeridas por `src/layouts/Layout.astro` y `src/pages/galery-blog.astro`:
   - `layout: ../../layouts/Layout.astro`
   - `title`: no vacío
   - `author: Andrea Villar`
   - `description`: 1–2 frases
3. **Comprobar que no quedan marcas pendientes**: verificar que `borrador.md` no contenga marcadores `[verificar]` sin resolver. Si los hay, avisar a la autora antes de mover.
4. **Mover a producción**: mover `drafts/<slug>/borrador.md` a `src/pages/blog/<slug>.md` (`mv drafts/<slug>/borrador.md src/pages/blog/<slug>.md`).
5. **Commit local (sin push)**:
   - Añadir únicamente `src/pages/blog/<slug>.md` al stage (`git add src/pages/blog/<slug>.md`).
   - Crear un commit local con el mensaje `artículo: <título del artículo>` (o `articulo: <slug>`).
   - **Prohibido hacer `git push`**: el despliegue lo realiza manualmente la autora.

---

## 3. Reglas de mantenimiento

- El **qué** hace cada rol vive exclusivamente en `agents/*.md` y `guia-de-estilo.md`.
- `.opencode/agents/*.md` solo contiene la configuración específica de OpenCode (permisos acotados, modo y delegación a `agents/*.md`), sin duplicar las instrucciones del rol.
