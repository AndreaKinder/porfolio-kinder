---
layout: ../../layouts/Layout.astro
title: "Un sistema de notas gobernado por contratos: Neovim, Obsidian y Agentes Locales"
author: Andrea Villar
description: Arquitectura de un sistema de gestión del conocimiento personal (PKM) desacoplado en cuatro capas, diseñado para convivir con agentes de IA locales sin degradar la estructura del repositorio.
---

## 1. La fragilidad del PKM ante la automatización

La mayoría de los sistemas de gestión del conocimiento personal (*Personal Knowledge Management* o PKM) funcionan bien mientras la interacción depende exclusivamente del usuario. Sin embargo, al incorporar automatizaciones o agentes de inteligencia artificial para organizar información, el repositorio suele degradarse rápidamente:

- Creación descontrolada de archivos huérfanos en la raíz de la bóveda.
- Proliferación de carpetas redundantes para un mismo propósito (`daily/`, `journal/`, `diario/`).
- Disparidad en esquemas de metadatos frontmatter, lo que inutiliza consultas estructuradas posteriores.
- Herramientas con supuestos incompatibles sobre rutas de adjuntos y enlaces relativos.

Para solucionar este desacoplamiento sin renunciar a la agilidad de edición en terminal (Neovim) ni a las capacidades de navegación gráfica (Obsidian), la arquitectura de mi bóveda se construyó sobre un principio de **contrato de interfaz explícito**. Cualquier actor —sea un script, un plugin de editor o un modelo de lenguaje— debe respetar invariantes estructurales inmutables.

El ecosistema se divide en cuatro piezas independientes:

```
┌────────────────────────────────────────────────────────┐
│                   Bóveda Markdown                      │
│            Contrato del Vault (AGENTS.md)              │
│               <templates-path-notes>                   │
└───────────▲──────────────────────────────▲─────────────┘
            │                              │
┌───────────┴───────────┐      ┌───────────┴─────────────┐
│  Edición e Interfaz   │      │    Agentes y Contexto   │
│  Neovim / Obsidian    │      │  MCP RAG / Agent Skill  │
│ <nvim-plugin-notes>   │      │    <mcp-rag-notes>      │
│                       │      │    <skills-notes>       │
└───────────────────────┘      └─────────────────────────┘
```

---

## 2. El contrato del Vault: [`templates-path-notes`](https://github.com/AndreaKinder/templates-path-notes)

El núcleo del sistema es la plantilla base de la bóveda, materializada en `<templates-path-notes>`. Su función principal es definir la taxonomía y las reglas invariantes antes de que se cree la primera nota.

En la raíz del repositorio reside `AGENTS.md`, un documento normativo diseñado específicamente para que los agentes autónomos conozcan los límites operativos:

| Directorio | Propósito | Regla de nomenclatura |
|------------|-----------|-----------------------|
| `journal/` | Bitácoras y notas diarias | `YYYY-MM-DD.md` |
| `finanzas/` | Balances mensuales, facturas e impuestos | `finanzas/YYYY/cuentas/YYYY-MM.md` |
| `todo/` | Tareas detalladas con fecha | `todo/YYYY-MM-DD/<ID>.md` |
| `zettelkasten/` | Notas atómicas de conocimiento | `<TIMESTAMP>-<SLUG>.md` |
| `projects/` | Documentación técnica de proyectos | `projects/<nombre>/` |
| `templates/` | Plantillas oficiales | `plantilla-*.md` |
| `assets/` | Adjuntos binarios, PDFs e imágenes | `assets/` |

### Invariantes estructurales

1. **Raíz limpia:** Ningún archivo Markdown puede residir en la raíz del vault; todo recurso pertenece estrictamente a una subcarpeta del sistema.
2. **Normalización temporal:** Las notas diarias residen únicamente en `journal/`. No se admiten nombres alternativos.
3. **Esquema YAML estricto:** Toda nota generada debe incluir metadatos mínimos obligatorios:
   ```yaml
   ---
   id: <ID-UNICO>
   description: "Resumen conciso del contenido"
   aliases:
     - "Nombre Principal"
   tags:
     - categoria
   ---
   ```
4. **Alineación con Obsidian:** La configuración interna en `.obsidian/` replica exactamente las mismas rutas (`attachmentFolderPath: "assets"`, `newFileFolderPath: "zettelkasten"`, y configuración de Daily Notes hacia `journal/`).

---

## 3. Resolución semántica de entidades: [`skills-notes`](https://github.com/AndreaKinder/skills-notes)

Cuando interactúas con un agente conversacional, las peticiones rara vez contienen rutas completas del sistema de archivos. Expresiones como *"añade esta tarea a la nota de hoy"* o *"revisa las cuentas del mes pasado"* requieren una capa de traducción determinista.

El proyecto `<skills-notes>` implementa este puente como una skill estructurada para agentes locales, disponible tanto en español como en inglés. Su responsabilidad es doble:

1. **Resolución temporal y taxonómica:** Mediante utilidades como `resolve_note.py`, traduce expresiones relativas de lenguaje natural a rutas absolutas normalizadas:
   - *"nota diaria"* / *"hoy"* $\rightarrow$ `journal/YYYY-MM-DD.md`
   - *"ayer"* / *"anteayer"* $\rightarrow$ cálculo de desfase y resolución a `journal/`
   - *"cuentas del mes"* $\rightarrow$ `finanzas/YYYY/cuentas/YYYY-MM.md`
   - *"idea"* / *"zettelkasten"* $\rightarrow$ generación de timestamp unix con slug descriptivo
2. **Preservación de plantillas:** Si el archivo destino no existe, el agente utiliza obligatoriamente la plantilla oficial correspondiente (`templates/plantilla-diaria.md`, `templates/plantilla-cuentas-mes.md`), evitando la invención de formatos sobre la marcha.

---

## 4. Búsqueda híbrida local sin dependencias pesadas: [`mcp-rag-notes`](https://github.com/AndreaKinder/mcp-rag-notes)

Para que un modelo de lenguaje consulte o sintetice información de la bóveda de forma eficiente, no basta con leer archivos individuales ni resulta viable cargar el repositorio completo en la ventana de contexto.

`<mcp-rag-notes>` implementa un servidor conforme a la especificación **Model Context Protocol (MCP)** sobre `stdio`. Sus decisiones técnicas clave fueron:

- **Embeddings locales:** Utiliza modelos abiertos servidos por una instancia local de Ollama (por defecto, `snowflake-arctic-embed2`), garantizando que las notas personales no salgan de la máquina.
- **Búsqueda híbrida con SQLite nativo:** En lugar de incorporar dependencias complejas como ChromaDB o bases de datos vectoriales pesadas, utiliza una única base de datos SQLite con FTS5 (*Full-Text Search*) y almacenamiento de vectores serializados.
- **Fusión por Rango Recíproco (RRF):** Los resultados de la búsqueda léxica exacta (FTS5) y la búsqueda semántica vectorial se combinan mediante RRF, equilibrando la precisión en términos técnicos concretos con la recuperación temática amplia.
- **Gestión bilingüe:** Expone puntos de entrada desacoplados (`mcp-server-notes-en` y `mcp-server-notes-es`), lo que permite variar los defaults de ruta (`~/Notes` vs `~/Notas`) mediante variables de entorno estándar.

---

## 5. El entorno de edición humana: [`nvim-plugin-notes`](https://github.com/AndreaKinder/nvim-plugin-notes)

La interacción personal con la bóveda ocurre principalmente desde la terminal mediante Neovim, con soporte secundario en Obsidian para revisión visual o lectura prolongada.

`<nvim-plugin-notes>` proporciona la capa de configuración en Lua que adapta el editor a las mismas reglas pactadas con los agentes:

- **Integración con `obsidian.nvim`:** Configurado para sincronizar workspaces dinámicos, creación de notas en `zettelkasten/`, y autocompletado de tags y wikilinks.
- **Mapeo directo de plantillas y journal:** Automatiza la apertura de la nota de hoy (`<leader>od`), inserción de plantillas predefinidas y vinculación con calendarios interactivos en terminal (`calendar.vim`).
- **Respeto a variables de entorno compartidas:** Lee variables comunes como `NOTES_VAULT_PATH`, `OBSIDIAN_DAILY_FOLDER` y `OBSIDIAN_TEMPLATES_FOLDER`, asegurando que cualquier cambio de entorno afecte de forma idéntica a Neovim, al servidor MCP y a las herramientas de agentes.

---

## 6. Conclusión: La necesidad de contratos en la era de los agentes

La utilidad a largo plazo de una base de conocimiento no depende de la sofisticación del modelo de IA que la asista, sino de la coherencia interna de los datos.

Al formalizar un contrato claro en [`templates-path-notes`](https://github.com/AndreaKinder/templates-path-notes), dotar a los modelos de herramientas de resolución deterministas con [`skills-notes`](https://github.com/AndreaKinder/skills-notes), proveer recuperación híbrida privada con [`mcp-rag-notes`](https://github.com/AndreaKinder/mcp-rag-notes) y alinear el editor con [`nvim-plugin-notes`](https://github.com/AndreaKinder/nvim-plugin-notes), el sistema permite:

- Editar con agilidad manual sin preocuparse por desestructurar metadatos.
- Delegar a agentes la recopilación o consulta de notas sin riesgo de dispersión caótica de archivos.
- Preservar la privacidad absoluta del conocimiento personal mediante ejecución puramente local.
