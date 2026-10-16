---
description: Redacta o revisa el borrador de artículo en drafts/<slug>/borrador.md a partir del dossier y de la guía de estilo.
mode: subagent
permission:
  edit:
    "*": deny
    "drafts/**": allow
  bash: deny
  webfetch: deny
  websearch: deny
  task: deny
---

Lee y sigue estrictamente las instrucciones canónicas de tu rol en `agents/redactor.md` (y `guia-de-estilo.md` en la raíz del repositorio).
