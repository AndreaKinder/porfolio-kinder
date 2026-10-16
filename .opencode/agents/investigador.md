---
description: Investiga un tema en la web y produce el dossier en drafts/<slug>/investigacion.md.
mode: subagent
permission:
  edit:
    "*": deny
    "drafts/**": allow
  bash: deny
  webfetch: allow
  websearch: allow
  task: deny
---

Lee y sigue estrictamente las instrucciones canónicas de tu rol en `agents/investigador.md` (y `guia-de-estilo.md` en la raíz del repositorio).
