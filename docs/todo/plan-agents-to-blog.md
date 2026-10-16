# Plan: pipeline de agentes para artículos del portfolio

## Estructura: genérica (canonical) + nativa (wiring)

```
AGENTS.md                      # estándar agents.md — el pipeline completo en lenguaje natural
agents/                        # ★ contenido canónico de cada rol (portable)
  investigador.md              #   frontmatter (description) + procedimiento + contrato de salida
  redactor.md                  #   cómo redactar con guia-de-estilo.md e investigacion.md
  editor.md                    #   checklist de revisión
guia-de-estilo.md              # ★ guía canónica del portfolio
drafts/<slug>/                 # (gitignored) investigacion.md → borrador.md → revision.md
.opencode/                     # solo "cables", cero contenido duplicado
  agents/
    editorial.md               # primary: orquesta, itera contigo, único con edit src/pages/blog/** + git
    investigador.md            # subagent: mode/permissions/model + cuerpo = "sigue agents/investigador.md"
    redactor.md                # idem → agents/redactor.md
    editor.md                  # idem → agents/editor.md
  commands/
    articulo.md                # /articulo <tema> [idioma]  → agent: editorial
    publicar.md                # /publicar <slug>           → agent: editorial
.gitignore                     # + drafts/
```

**Regla de mantenimiento:** el *qué* hace cada rol vive solo en `agents/*.md` y `guia-de-estilo.md`; `.opencode/agents/*.md` solo aporta permisos, modo y modelo e instruye al subagente leer su archivo canónico. Cualquier otra herramienta (Codex, Claude Code, Cursor…) ejecuta el mismo pipeline leyendo `AGENTS.md`.

## Flujo del pipeline

```
tú: "artículo sobre X" (o /articulo X, o "…en catalán")
 └─ agente coordinador (editorial / lo que lea AGENTS.md)
     ├─ 1. investigador → drafts/<slug>/investigacion.md (fuentes, puntos clave, esquema, slug)
     ├─ 2. redactor     → drafts/<slug>/borrador.md  (sigue guia-de-estilo.md)
     ├─ 3. editor       → corrige el borrador in situ + drafts/<slug>/revision.md (veredicto)
     └─ te entrega resumen + ruta → TÚ REVISAS
           ├─ cambios → el coordinador relanza al redactor con tu feedback
           └─ aprobado → /publicar <slug>
                  valida frontmatter → mv a src/pages/blog/<slug>.md → git commit (sin push)
```

## Los dos caminos de uso

| | Genérico | Nativo OpenCode |
|---|---|---|
| Lanzar | "escribe un artículo sobre X" (cualquier agente que lea `AGENTS.md`; sin subagentes registrados, usa su subagente genérico con `agents/<rol>.md` como prompt) | `/articulo X` (o "…en catalán") |
| Cadena | investigador → redactor → editor, entregando `drafts/x/borrador.md` | idem, con permisos reales acotados (`edit` solo en `drafts/**`, `shell` deny en los 3 roles) |
| Iterar | editas a mano o pides cambios al agente | hablas con `editorial`, relanza al redactor con tu feedback |
| Publicar | mv + commit siguiendo `AGENTS.md` | `/publicar x` → valida, `mv`, `git commit` (sin push) |

## Contexto del repo (verificado)

- Artículos = Markdown en `src/pages/blog/*.md`; sin content collections.
- `galery-blog.astro` los autolistea con `Astro.glob("./blog/*.md")` → **un borrador en esa carpeta ya sería publicado**; por eso los borradores viven en `drafts/` hasta aprobación.
- Frontmatter fijo: `layout: ../../layouts/Layout.astro`, `title`, `author: Andrea Villar`, `description` (1–2 frases).
- Estilo observable en los 2 artículos actuales (`construhack2024.md`, `llms-txt-vs-webmcp.md`): español, secciones `##` numeradas, introducción + cierre, enlaces de referencia, bloques de código.

## Decisiones

- 3 subagentes (investigador, redactor, editor) + coordinador `editorial` primary.
- Publicación = mover el archivo + commit local, sin push (despliegue manual por ti).
- Idioma: español por defecto; catalán/inglés opcionales como argumento del comando (autor y estructura no cambian).
- Slug propuesto por el investigador; carpeta de borradores = slug.
- Checkpoint único en ti (sin validación intermedia de esquema).
- `drafts/` en `.gitignore` (material de trabajo; el commit solo incluye el artículo final).

## Archivos a crear — estado

| # | Archivo | Estado |
|---|---|---|
| 1 | `agents/investigador.md` | ✅ creado |
| 2 | `agents/redactor.md` | ✅ creado |
| 3 | `agents/editor.md` | ✅ creado |
| 4 | `guia-de-estilo.md` | ✅ creado |
| 5 | `AGENTS.md` | ✅ creado |
| 6 | `.opencode/agents/editorial.md` | ✅ creado |
| 7 | `.opencode/agents/investigador.md` | ✅ creado |
| 8 | `.opencode/agents/redactor.md` | ✅ creado |
| 9 | `.opencode/agents/editor.md` | ✅ creado |
| 10 | `.opencode/commands/articulo.md` | ✅ creado |
| 11 | `.opencode/commands/publicar.md` | ✅ creado |
| 12 | `.gitignore` + línea `drafts/` | ✅ creado |

> Nota: los 3 archivos canónicos de `agents/` son funcionales ya por sí solos (incluyen frontmatter, procedimiento y contrato de salida), incluso sin `guia-de-estilo.md` ni `.opencode/`: los agentes tienen un mínimo inline de estilo como fallback.

## Uso final

```
/articulo cómo funciona el protocolo MCP en el navegador
  → "Revisa drafts/mcp-navegador/borrador.md y drafts/mcp-navegador/revision.md"
  → (comentas) "la sección 4 muy densa, simplifícala"
/publicar mcp-navegador
  → src/pages/blog/mcp-navegador.md  ·  commit "artículo: …"
```
