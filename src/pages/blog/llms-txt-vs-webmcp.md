---
layout: ../../layouts/Layout.astro
title: "llms.txt vs WebMCP: De la web legible a la web accionable por IA"
author: Andrea Villar
description: Análisis comparativo entre el estándar llms.txt y el protocolo WebMCP para preparar aplicaciones web en la era de los agentes de inteligencia artificial.
---

## 1. Introducción: Un nuevo usuario en la web

Durante décadas hemos diseñado y desarrollado páginas web pensando en dos tipos de consumidores: las personas (a través de interfaces visuales, CSS e interacciones en el DOM) y los rastreadores tradicionales de motores de búsqueda (a través de `robots.txt`, `sitemap.xml` y etiquetas semánticas).

Sin embargo, la llegada de los **grandes modelos de lenguaje (LLMs)** y los **agentes autónomos de IA** ha cambiado las reglas del juego. Hoy en día, cuando un asistente o agente intenta leer documentación o realizar una tarea en una web moderna, se topa con un muro de *divs* anidados, hidratación de JavaScript, banners de cookies y hojas de estilo que consumen miles de tokens sin aportar contexto útil. Peor aún: cuando el agente necesita *interactuar* (filtrar un catálogo, rellenar un formulario o ejecutar una acción), suele depender de técnicas frágiles como capturas de pantalla o inspección heurística del DOM.

Para resolver este problema han surgido dos propuestas clave que están redefiniendo la arquitectura web: **`llms.txt`** y **WebMCP**. Aunque a menudo se mencionan en la misma conversación, abordan el problema desde ángulos muy distintos.

## 2. ¿Qué es `llms.txt`? La capa de lectura y contexto

Propuesto por Jeremy Howard (*Answer.AI*), **[llms.txt](https://llmstxt.org/)** es una convención ligera inspirada en el clásico `robots.txt`. Consiste en colocar un archivo en formato **Markdown** en la raíz de un sitio web (`/llms.txt`, a menudo acompañado de `/llms-full.txt`) diseñado específicamente para ser consumido por modelos de lenguaje.

En lugar de obligar a un LLM a descargar y limpiar megabytes de HTML, `llms.txt` ofrece un mapa conciso, jerárquico y legible tanto por humanos como por máquinas:

```markdown
# Nombre del Proyecto

> Resumen breve del propósito del proyecto o sitio web.

## Documentación Principal

- [Guía de inicio rápido](https://ejemplo.dev/docs/quickstart.md): Configuración e instalación paso a paso.
- [Arquitectura de la API](https://ejemplo.dev/docs/api.md): Endpoints disponibles y esquemas de autenticación.

## Opcional

- [Historial de cambios](https://ejemplo.dev/changelog.md): Notas de versiones recientes.
```

### Ventajas clave de `llms.txt`
- **Eficiencia de tokens:** Elimina todo el ruido visual (menús, scripts, anuncios) y entrega texto semántico puro en Markdown.
- **Implementación inmediata:** En frameworks estáticos como Astro, puede escribirse a mano o generarse automáticamente en tiempo de compilación (*build time*).
- **Ideal para documentación y portfolios:** Permite que asistentes de código e IDEs comprendan una librería o proyecto en una sola petición HTTP.

## 3. ¿Qué es WebMCP? La capa de acción e interacción

Mientras que `llms.txt` resuelve la *lectura*, **WebMCP** (*Web Model Context Protocol*) resuelve la *ejecución*. Impulsado dentro del grupo de trabajo *W3C Web Machine Learning* (con aportaciones de ingenieros de Google y Microsoft) y basado en la filosofía del **Model Context Protocol (MCP)** de Anthropic, WebMCP lleva las capacidades de herramientas estructuradas directamente al navegador.

En lugar de que un agente externo intente adivinar en qué coordenada `(x, y)` de la pantalla debe hacer clic para buscar un producto o enviar un formulario, la propia aplicación web registra sus capacidades de forma declarativa mediante la API del navegador (`navigator.modelContext` / `document.modelContext`):

```javascript
// Registro de una herramienta en el cliente mediante WebMCP
await document.modelContext.registerTool({
  name: "filtrarProyectos",
  description: "Filtra los proyectos del portfolio por tecnología o etiqueta.",
  inputSchema: {
    type: "object",
    properties: {
      tecnologia: {
        type: "string",
        description: "Etiqueta tecnológica a filtrar (ej. linux, react, astro, nvim)"
      }
    },
    required: ["tecnologia"]
  },
  execute: async ({ tecnologia }) => {
    const resultados = aplicarFiltroEnUI(tecnologia);
    return {
      total: resultados.length,
      proyectos: resultados.map((p) => p.title)
    };
  }
});
```

### Ventajas clave de WebMCP
- **Adiós al *scraping* frágil de UI:** Si cambias el diseño CSS o refactorizas tus componentes visuales, las herramientas expuestas por WebMCP siguen funcionando sin romperse.
- **Aprovecha el estado y la sesión del navegador:** Al ejecutarse en el contexto del cliente, el agente opera con el estado actual de la aplicación (y con los permisos que el propio usuario ya tiene activos en su sesión), sin necesidad de exponer tokens de API privados a servidores de terceros.
- **Interacción determinista:** Los parámetros de entrada están validados mediante *JSON Schema*, reduciendo drásticamente las alucinaciones del modelo al interactuar con la web.

## 4. Comparativa directa: `llms.txt` vs WebMCP

Aunque ambos estándares buscan hacer la web "nativa para agentes", operan en capas completamente diferentes de la pila tecnológica:

| Dimensión | `llms.txt` | WebMCP (`document.modelContext`) |
| :--- | :--- | :--- |
| **Objetivo principal** | Descubrimiento y lectura de contenido estático | Ejecución de acciones e interacción dinámica |
| **Formato / Interfaz** | Archivo Markdown estático (`/llms.txt`) | API JavaScript del navegador + *JSON Schema* |
| **Naturaleza** | Pasiva (solo lectura, sin estado) | Activa (invocación de funciones, con estado) |
| **Entorno de ejecución** | Petición HTTP directa desde cualquier cliente | Contexto del navegador (*client-side runtime*) |
| **Complejidad de adopción** | Muy baja (minutos) | Media (requiere definir herramientas y esquemas) |
| **Caso de uso estrella** | Documentación técnica, blogs, índices de sitios | E-commerce, SaaS, paneles de control, apps interactivas |

## 5. ¿Competidores o complementarios?

Plantear `llms.txt` contra WebMCP como una batalla donde solo puede quedar uno es un error de enfoque. En realidad, **son piezas complementarias de una misma arquitectura**:

1. **Fase de contexto (`llms.txt`):** Un agente accede a `/llms.txt` para entender de qué trata el sitio web, cuál es su estructura de información y qué documentación técnica tiene disponible, sin gastar ventana de contexto en HTML innecesario.
2. **Fase de acción (`WebMCP`):** Cuando el usuario le pide al agente integrado en su navegador que realice una tarea concreta dentro de la aplicación web, el agente consulta las herramientas registradas en `document.modelContext` y ejecuta la acción de forma segura, rápida y estructurada.

## 6. Conclusión

Estamos viviendo la transición desde una web diseñada exclusivamente para ser *renderizada en píxeles* hacia una web dual: visual para las personas y semántica/programática para los agentes.

Como desarrolladores, adoptar **`llms.txt`** hoy mismo es una victoria rápida (*quick win*) que mejora al instante cómo los modelos de IA indexan y comprenden nuestros proyectos. Al mismo tiempo, seguir de cerca e integrar **WebMCP** en nuestras interfaces interactivas nos prepara para el siguiente gran salto: convertir nuestras aplicaciones web en herramientas de primera clase dentro del ecosistema de la inteligencia artificial.
