---
description: Inicia el pipeline completo (investigador → redactor → editor) para un nuevo artículo en drafts/<slug>/. Uso: /articulo <tema> [idioma]
agent: editorial
---

Ejecuta el pipeline de creación de artículo para la siguiente solicitud:

$ARGUMENTS

Instrucciones:
1. Identifica el **tema** y el **idioma** objetivo (`es` por defecto si no se especifica otro como catalán/`ca` o inglés/`en`).
2. Lanza en cadena a los subagentes `investigador` → `redactor` → `editor` siguiendo `AGENTS.md`.
3. Al finalizar, preséntame el resumen ejecutivo, el veredicto de `drafts/<slug>/revision.md`, las decisiones pendientes (si las hay) y la ruta a `drafts/<slug>/borrador.md` para que pueda revisarlo.
