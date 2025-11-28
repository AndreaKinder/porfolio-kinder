# 🎮 Guía de Integración NES.css

Esta guía te ayudará a completar la integración de NES.css (framework CSS estilo 8-bit) en tu portfolio.

## 📋 Cambios Realizados

### 1. **styles.css** actualizado
- ✅ Variables CSS compatibles con NES.css
- ✅ Paleta de colores retro (light/dark)
- ✅ Sombras estilo pixel-art (4px box-shadows)
- ✅ Estilos para botones 8-bit
- ✅ Theme toggle actualizado con estética retro

### 2. **darkStile.css** actualizado
- ✅ Tema oscuro compatible con NES.css
- ✅ Estilos para containers, inputs y cards
- ✅ Pixel-perfect rendering

## 🚀 Pasos para Completar la Integración

### Paso 1: Instalar NES.css

Elige una de estas opciones:

#### Opción A: Via NPM (Recomendado)
```bash
npm install nes.css
```

Luego, importa en tu `Layout.astro`:
```astro
---
import "nes.css/css/nes.min.css";
---
```

#### Opción B: Via CDN
Agrega en el `<head>` de `Layout.astro`:
```html
<link href="https://unpkg.com/nes.css@latest/css/nes.min.css" rel="stylesheet" />
```

### Paso 2: Agregar la Fuente Press Start 2P

En `Layout.astro`, agrega en el `<head>`:
```html
<link href="https://fonts.googleapis.com/css?family=Press+Start+2P" rel="stylesheet">
```

### Paso 3: Actualizar Layout.astro

Tu archivo `src/layouts/Layout.astro` debería verse así:

```astro
---
import Footer from "../components/footer.astro";
import "../styles/styles.css";
import HerderLink from "../components/herderLink.astro";
import HeaderMenu from "../components/headerMenu.astro";
const { title, frontmatter } = Astro.props;
---

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="utf-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width" />
    <meta name="generator" content="Astro" />
    <title>Andrea Villar</title>

    <!-- NES.css Framework -->
    <link href="https://unpkg.com/nes.css@latest/css/nes.min.css" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Press+Start+2P" rel="stylesheet">

    <!-- Bootstrap (opcional: puedes removerlo si prefieres solo NES.css) -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">

    <style>
        body {
            font-family: var(--system-font);
            background: var(--button-gradient);
            margin: 0;
            padding: 0;
        }
    </style>
</head>
<body>
    <!-- Resto del contenido -->
</body>
</html>
```

## 🎨 Uso de Componentes NES.css

### Botones
```html
<!-- Botón normal -->
<button type="button" class="nes-btn">Normal</button>

<!-- Botón primario -->
<button type="button" class="nes-btn is-primary">Primary</button>

<!-- Botón de éxito -->
<button type="button" class="nes-btn is-success">Success</button>

<!-- Botón de advertencia -->
<button type="button" class="nes-btn is-warning">Warning</button>

<!-- Botón de error -->
<button type="button" class="nes-btn is-error">Error</button>
```

### Contenedores
```html
<!-- Contenedor básico -->
<div class="nes-container">
  <p>Contenido aquí</p>
</div>

<!-- Contenedor con título -->
<div class="nes-container with-title">
  <p class="title">Título</p>
  <p>Contenido aquí</p>
</div>

<!-- Contenedor oscuro -->
<div class="nes-container is-dark">
  <p>Contenido oscuro</p>
</div>

<!-- Contenedor redondeado -->
<div class="nes-container is-rounded">
  <p>Contenido redondeado</p>
</div>
```

### Inputs
```html
<!-- Input de texto -->
<input type="text" class="nes-input" placeholder="Escribe aquí...">

<!-- Input con error -->
<input type="text" class="nes-input is-error">

<!-- Input con éxito -->
<input type="text" class="nes-input is-success">

<!-- Textarea -->
<textarea class="nes-textarea"></textarea>
```

### Diálogos
```html
<dialog class="nes-dialog" id="dialog-default">
  <form method="dialog">
    <p class="title">Dialog</p>
    <p>¡Alerta estilo NES!</p>
    <menu class="dialog-menu">
      <button class="nes-btn">Cancelar</button>
      <button class="nes-btn is-primary">Confirmar</button>
    </menu>
  </form>
</dialog>
```

### Iconos y Badges
```html
<!-- Corazón -->
<i class="nes-icon heart"></i>

<!-- Estrella -->
<i class="nes-icon star"></i>

<!-- Like -->
<i class="nes-icon like"></i>

<!-- Badge -->
<span class="nes-badge">
  <span class="is-error">10</span>
</span>
```

## 🎯 Personalización de Variables

Las variables CSS ya están configuradas en `styles.css`. Puedes modificarlas:

```css
:root {
  --nes-primary: #209cee;
  --nes-success: #92cc41;
  --nes-warning: #f7d51d;
  --nes-error: #e76e55;
  --shadow: 4px 4px 0px rgba(0, 0, 0, 0.3);
  --border-color: #212529;
}
```

## 💡 Recomendaciones

1. **Fuente Press Start 2P**: Úsala solo en títulos (h1, h2, h3) para mejor legibilidad. Descomenta en `styles.css`:
   ```css
   h1, h2, h3 {
     font-family: var(--nes-font);
     line-height: 1.5;
   }
   ```

2. **Bootstrap**: Puedes mantener Bootstrap para el grid system, pero usa componentes de NES.css para botones, inputs, etc.

3. **Tema Oscuro**: El sistema de temas existente (`data-theme="dark"`) ya está integrado con NES.css.

## 📚 Recursos

- [Documentación oficial NES.css](https://nostalgic-css.github.io/NES.css/)
- [GitHub NES.css](https://github.com/nostalgic-css/NES.css)
- [CDN NES.css](https://unpkg.com/nes.css@latest/css/nes.min.css)

## 🐛 Solución de Problemas

### Los estilos no se aplican
- Verifica que NES.css esté importado ANTES de tus estilos personalizados
- Asegúrate de que la fuente Press Start 2P esté cargada

### Conflictos con Bootstrap
- NES.css tiene prioridad. Si hay conflictos, usa `!important` o remueve Bootstrap

### Imágenes se ven borrosas
- Las reglas `image-rendering: pixelated` ya están aplicadas para el look retro

---

¡Disfruta tu portfolio con estilo retro 8-bit! 🎮✨
