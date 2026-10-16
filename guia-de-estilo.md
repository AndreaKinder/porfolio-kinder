# Guía de estilo del blog — Portfolio de Andrea Villar

Esta guía define el contrato editorial y técnico de todos los artículos publicados en `src/pages/blog/*.md`. Tanto **investigador**, **redactor** como **editor** deben seguirla como fuente de verdad.

---

## 1. Arquitectura técnica en Astro

- **Ubicación final**: `src/pages/blog/<slug>.md`.
- **Autolistado**: `src/pages/galery-blog.astro` carga automáticamente todos los archivos `src/pages/blog/*.md` con `Astro.glob("./blog/*.md")`. Cualquier archivo en esa carpeta queda publicado inmediatamente en la galería del blog; por eso **todo borrador debe vivir en `drafts/<slug>/`** hasta su aprobación explícita.
- **Slug**: `kebab-case`, ASCII, sin tildes ni caracteres especiales, de 2 a 4 palabras descriptivas (ej. `construhack2024`, `llms-txt-vs-webmcp`, `mcp-navegador`).
- **Frontmatter obligatorio** (primera línea del archivo `---`, sin campos extra ni omitidos):

```yaml
---
layout: ../../layouts/Layout.astro
title: "Título claro y directo del artículo"
author: Andrea Villar
description: Resumen de 1–2 frases que aparece en la tarjeta del listado en galery-blog.astro.
---
```

> **Nota sobre `title` y `description`**: Si el texto contiene dos puntos (`:`), comillas o caracteres especiales de YAML, envuélvelo entre comillas dobles (`"..."`). El campo `author` es **siempre** `Andrea Villar`, independientemente del idioma del artículo.

---

## 2. Voz, tono y enfoque

Los artículos del portfolio se dividen en dos registros principales observables en el blog actual (`construhack2024.md` y `llms-txt-vs-webmcp.md`), que comparten una misma voz:

1. **Divulgación y análisis técnico** (ej. `llms-txt-vs-webmcp.md`):
   - Primera persona del plural inclusiva (*"hemos diseñado"*, *"estamos viviendo"*) o primera persona singular al dar opinión técnica.
   - Enfoque arquitectónico y práctico: explica **qué problema real resuelve** una tecnología, **cómo funciona por dentro** (con código o esquemas reales) y **cuándo usarla**.
2. **Crónica de proyectos y experiencias** (ej. `construhack2024.md`):
   - Primera persona singular o plural del equipo (*"participé"*, *"nuestro equipo asumió el reto"*, *"asumí la responsabilidad de reconfigurar..."*).
   - Relato honesto de decisiones técnicas, obstáculos reales (errores críticos, cambios de arquitectura bajo presión) y aprendizajes profesionales.

### Principios de estilo (qué hacer y qué evitar)
- **Claridad y densidad informativa**: cada párrafo debe aportar contexto técnico, un ejemplo verificable o una decisión concreta.
- **Cero relleno ni lenguaje de marketing**: evita frases vacías como *"en el vertiginoso mundo actual"*, *"revolucionario sin precedentes"* o introducciones genéricas sobre qué es la programación.
- **Rigor factual**: toda cifra, especificación, autor o afirmación técnica no trivial debe estar respaldada por una fuente enlazada inline. Nunca se inventan URLs, datos ni citas.

---

## 3. Estructura y longitud del artículo

- **Longitud objetivo**: **700–1200 palabras** (excepcionalmente 450–700 en crónicas breves de eventos si el tema está completamente cubierto).
- **Sin `# H1` en el cuerpo**: el layout `Layout.astro` ya renderiza `frontmatter.title` como `<h1>`. El cuerpo del Markdown debe empezar directamente en `## 1. …`.
- **Secciones `##` numeradas consecutivamente**:
  - Todas las secciones principales usan `## N. Título de sección` (`## 1. Introducción…`, `## 2. …`, etc.), sin saltos en la numeración.
  - Subsecciones opcionales con `###` sin numerar (ej. `### Ventajas clave de ...`).
- **Arco narrativo estándar (4 a 7 secciones `##`)**:
  1. `## 1. Introducción (: subtítulo opcional)` — Plantea el problema técnico o el contexto del proyecto desde la primera línea, explica por qué importa hoy y anticipa qué aborda el artículo.
  2. `## 2.` a `## N-1.` **Desarrollo** — Desglose de conceptos, arquitectura, proceso de desarrollo o comparativa directa.
  3. `## N. Conclusión` (o `Aprendizaje y Desarrollo Personal` en crónicas) — Síntesis clara, visión práctica como desarrolladora y próximos pasos o enlaces finales al repositorio/evento.

---

## 4. Recursos visuales y formato Markdown

El layout `Layout.astro` estiliza de forma nativa los siguientes elementos (úsalos cuando mejoren la lectura, nunca por decoración):

- **Énfasis**: **negrita** (`**...**`) para conceptos clave en la primera mención o al inicio de cada ítem de una lista (`- **Eficiencia de tokens:** Explicación...`); *cursiva* (`*...*`) para préstamos del inglés (*build time*, *scraping*, *quick win*) o matices.
- **Código inline y bloques de código**:
  - Usa `` `código` `` para rutas (`/llms.txt`), APIs (`document.modelContext`), archivos o comandos.
  - Usa bloques vallados con lenguaje explícito (` ```javascript `, ` ```markdown `, ` ```bash `, etc.) con ejemplos breves, realistas y comentados.
- **Tablas comparativas**: cuando se comparen estándares, herramientas o enfoques, incluye una tabla Markdown con dimensiones claras en la primera columna en negrita (`| **Objetivo principal** | ... |`).
- **Enlaces de referencia**: integrados de forma natural en el texto (`[llms.txt](https://llmstxt.org/)`, `[ConstruHack2024](https://...)`), apuntando siempre a fuentes primarias o repositorios oficiales.

---

## 5. Idiomas soportados

- **Español (`es`) — por defecto**: ortografía y puntuación normativa española (comillas tipográficas o dobles rectas consistentes, signos de apertura `¿`/`¡`).
- **Catalán (`ca`) o Inglés (`en`) — bajo petición**:
  - Todo el cuerpo del artículo, el `title` y la `description` se redactan íntegramente en el idioma solicitado.
  - Se mantienen sin traducir: `author: Andrea Villar`, las claves del frontmatter (`layout`, `title`, `author`, `description`) y los nombres propios de protocolos, librerías o estándares oficiales.
