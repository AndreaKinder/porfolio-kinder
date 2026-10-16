---
description: Valida y publica el borrador de drafts/<slug>/borrador.md en src/pages/blog/<slug>.md y crea el commit local. Uso: /publicar <slug>
agent: editorial
---

Publica el artículo correspondiente al slug: `$ARGUMENTS`

Sigue exactamente el procedimiento de publicación de `AGENTS.md`:
1. Comprueba que existe `drafts/$1/borrador.md` y revisa `drafts/$1/revision.md`.
2. Valida que el frontmatter YAML de `drafts/$1/borrador.md` tenga exactamente `layout: ../../layouts/Layout.astro`, `title`, `author: Andrea Villar` y `description` (1–2 frases), y que no queden marcas `[verificar]` en el texto.
3. Mueve `drafts/$1/borrador.md` a `src/pages/blog/$1.md`.
4. Haz `git add src/pages/blog/$1.md` y crea el commit local `artículo: <título>` **sin hacer push**.
