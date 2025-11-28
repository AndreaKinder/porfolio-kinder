# 🎮 Guía de Tipografía NES.css - Portfolio Andrea Villar

## ✅ Configuración Completa de Fuentes

### 📝 Resumen de Cambios

Todos los textos y fuentes han sido ajustados para la estética retro 8-bit de NES.css con óptima legibilidad.

## 🔤 Fuentes Implementadas

### **1. Press Start 2P** (Fuente Retro)
```css
font-family: 'Press Start 2P', cursive;
```
**Usada en:**
- ✅ Todos los headings (h1, h2, h3)
- ✅ Títulos de tarjetas (`.card-title`)
- ✅ Labels de formularios (`.form-label`)
- ✅ Navbar brand
- ✅ Footer text
- ✅ Botones
- ✅ Skills chips
- ✅ Nav links

### **2. System Fonts** (Fuente de Sistema)
```css
font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
             Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
             'Helvetica Neue', sans-serif;
```
**Usada en:**
- ✅ Texto del body
- ✅ Párrafos (p)
- ✅ Headings pequeños (h4, h5, h6)
- ✅ Texto de tarjetas (`.card-text`)
- ✅ Subtítulos (`.card-subtitle`)
- ✅ Inputs y textareas

## 📏 Tamaños de Fuente

### Desktop (> 1200px)
```css
h1: 3rem (48px)
h2: 1.8rem (28.8px)
h3: 1.3rem (20.8px)
h4: 1rem (16px)
p: 1rem (16px)
buttons: 0.8rem (12.8px)
nav-links: 0.7rem (11.2px)
skill-chips: 0.7rem (11.2px)
form-labels: 0.7rem (11.2px)
```

### Tablets (577px - 1199px)
```css
h1: 2rem - 2.5rem
h2: 1.3rem - 1.5rem
h3: 1rem - 1.1rem
skill-chips: 0.65rem - 0.7rem
```

### Mobile (< 576px)
```css
h1: 1.5rem (24px)
h2: 1.2rem (19.2px)
h3: 0.9rem (14.4px)
buttons: 0.7rem (11.2px)
nav-links: 0.6rem (9.6px)
skill-chips: 0.6rem (9.6px)
```

## 🎨 Efectos Visuales de Texto

### **Text Shadows (Sombras Pixeladas)**

#### Modo Claro
```css
h1: 4px 4px 0px rgba(0, 0, 0, 0.25)
h2: 3px 3px 0px rgba(0, 0, 0, 0.2)
h3: 2px 2px 0px rgba(0, 0, 0, 0.15)
```

#### Modo Oscuro
```css
h1: 4px 4px 0px rgba(0, 0, 0, 0.7)
h2: 3px 3px 0px rgba(0, 0, 0, 0.6)
h3: 2px 2px 0px rgba(0, 0, 0, 0.5)
```

### **Letter Spacing (Espaciado)**
```css
h1.fw-bold, h1.text-uppercase: 2px
h2.fw-bold: 1px
navbar-brand h3: 2px
```

### **Line Height (Altura de Línea)**
```css
h1, h2, h3: 1.6
h4: 1.0
p: 1.8
.fs-4, .fs-5: 1.8
card-text: 1.6
```

## 🎯 Clases Específicas

### **Headings con Estilo Especial**
```css
.fw-bold          /* Usa Press Start 2P con letter-spacing */
.text-uppercase   /* H1 con espaciado extra */
.card-title       /* Título de tarjetas 8-bit */
```

### **Textos Utilitarios**
```css
.text            /* Color de texto según tema */
.text-primary    /* Color primario NES */
.text-success    /* Color success NES */
.text-warning    /* Color warning NES */
.text-error      /* Color error NES */
.fs-4, .fs-5     /* Line-height optimizado */
```

## 📱 Responsive Design

### **Ajustes Automáticos**

**Mobile (< 576px)**
- Fuentes reducidas 40-50%
- Line-height aumentado para legibilidad
- Padding reducido en chips y botones

**Tablets (577px - 768px)**
- Fuentes reducidas 20-30%
- Mantiene legibilidad óptima

**Desktop (> 1200px)**
- Fuentes aumentadas
- Espaciado generoso
- Text-shadow más pronunciado

## 🎨 Colores de Texto

### Modo Claro
```css
--text: #212529 (negro suave)
--nes-primary: #209cee (azul)
--nes-success: #92cc41 (verde)
--nes-warning: #f7d51d (amarillo)
--nes-error: #e76e55 (rojo)
```

### Modo Oscuro
```css
--text: #f8e9e0 (beige claro)
--nes-primary: #5cb3ff (azul claro)
--nes-success: #b8e986 (verde claro)
--nes-warning: #fce94f (amarillo claro)
--nes-error: #ff9999 (rojo claro)
```

## 💡 Mejores Prácticas

### ✅ **Usar Press Start 2P para:**
- Títulos principales
- Elementos de navegación
- Botones y CTAs
- Labels importantes
- Textos cortos que necesiten destacar

### ✅ **Usar System Fonts para:**
- Bloques de texto largo
- Descripciones
- Contenido de artículos
- Texto de formularios
- Cualquier texto que se lea por más de 5 segundos

### ⚠️ **Evitar:**
- Press Start 2P en párrafos largos (difícil de leer)
- Tamaños de fuente muy pequeños con Press Start 2P
- Line-height menor a 1.6 con Press Start 2P
- Demasiado letter-spacing en textos largos

## 🔧 Personalización

### Cambiar tamaño de headings
Edita `/src/styles/styles.css`:
```css
h1 {
  font-size: 3rem !important; /* Cambia este valor */
}
```

### Cambiar fuente de headings
```css
h1, h2, h3 {
  font-family: 'Tu Fuente', cursive !important;
}
```

### Desactivar Press Start 2P
Comenta las siguientes líneas en `styles.css`:
```css
/* h1, h2, h3 {
  font-family: 'Press Start 2P', cursive !important;
} */
```

### Cambiar color de texto
Modifica las variables CSS:
```css
:root {
  --text: #tu-color;
}
```

## 📊 Comparación Antes/Después

### Antes (Sin NES.css)
- ❌ Fuentes del sistema uniformes
- ❌ Sin sombras de texto
- ❌ Border-radius suaves
- ❌ Transiciones suaves
- ❌ Sin estética retro

### Después (Con NES.css)
- ✅ Press Start 2P en headings
- ✅ Text-shadow pixelado
- ✅ Bordes rectos 4px
- ✅ Animaciones stepped
- ✅ Estética 8-bit completa
- ✅ Responsive optimizado
- ✅ Legibilidad mejorada

## 🎮 Componentes con Tipografía Personalizada

### **Navbar**
```html
<nav class="navbar">
  <h3>ANDREA VILLAR</h3>
  <a class="nav-link">Inicio</a>
</nav>
```
- H3: Press Start 2P, 1rem, letter-spacing 2px
- Links: Press Start 2P, 0.7rem

### **Skills Chips**
```html
<div class="skill-chip">Python</div>
```
- Font: Press Start 2P, 0.7rem
- Padding ajustado para legibilidad

### **Cards**
```html
<div class="card">
  <h5 class="card-title">Título</h5>
  <h6 class="card-subtitle">Subtítulo</h6>
  <p class="card-text">Descripción</p>
</div>
```
- Title: Press Start 2P, 1rem
- Subtitle: System font, 0.75rem, opacity 0.8
- Text: System font, 0.9rem, line-height 1.6

### **Forms**
```html
<label class="form-label">Nombre</label>
<input type="text" class="form-control">
```
- Labels: Press Start 2P, 0.7rem
- Inputs: System font, 1rem

### **Footer**
```html
<footer>
  <p>© 2024 Andrea Villar</p>
</footer>
```
- Font: Press Start 2P, 0.8rem, line-height 1.8

## 📝 Notas Finales

### **Rendimiento**
- Press Start 2P se carga desde Google Fonts CDN
- Fuente optimizada para web
- Fallback a cursive si no carga

### **Accesibilidad**
- Line-height mínimo de 1.6 para legibilidad
- Contraste de colores WCAG AA compliant
- Tamaños de fuente escalables
- Responsive para todos los dispositivos

### **Compatibilidad**
- ✅ Chrome, Firefox, Safari
- ✅ Edge (Chromium)
- ✅ Mobile browsers
- ⚠️ IE no soportado (obsoleto)

---

## 🚀 Comandos Útiles

```bash
# Ver cambios en desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

---

**¡Tipografía retro 8-bit lista! 🎮✨**

Tu portfolio ahora tiene la estética completa de NES.css con óptima legibilidad en todos los dispositivos.
