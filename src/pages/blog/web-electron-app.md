---
layout: ../../layouts/Layout.astro
title: Cómo usar Electron para convertir una web en una aplicación de escritorio
author: Andrea Villar
description: Cómo utilizar Electron para convertir una aplicación web en una aplicación de escritorio multiplataforma, utilizando como ejemplo el código de la aplicación mymind-electron-app.
---
# Cómo usar Electron para convertir una web en una aplicación de escritorio

Electron es un framework que permite crear aplicaciones de escritorio multiplataforma utilizando tecnologías web como HTML, CSS y JavaScript. En este artículo, explicaremos cómo usar Electron para convertir una web en una aplicación de escritorio, utilizando como ejemplo el código de la aplicación mymind-electron-app.

## Pasos para crear una aplicación de escritorio con Electron

### 1. Configuración inicial

Primero, necesitas tener Node.js instalado en tu sistema. Luego, crea un nuevo directorio para tu proyecto y ejecuta los siguientes comandos:

```bash
npm init -y
npm install electron --save-dev
```

### 2. Estructura del proyecto

La estructura básica de un proyecto Electron incluye los siguientes archivos:

- main.js: El punto de entrada de la aplicación
- package.json: Configuración del proyecto y sus dependencias

### 3. Código principal (main.js)

El archivo main.js es el corazón de tu aplicación Electron. Aquí está un ejemplo basado en el código de mymind-electron-app:

```jsx
const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    },
    show: false
  });

  win.loadURL('https://access.mymind.com/everything');

  win.once('ready-to-show', () => {
    win.show();
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
```

Este código crea una ventana de aplicación y carga la URL especificada (en este caso, https://access.mymind.com/everything).

### 4. Configuración del package.json

Asegúrate de que tu package.json tenga la siguiente configuración:

```json
{
  "name": "mymind-electron-app",
  "version": "1.0.0",
  "description": "",
  "main": "main.js",
  "scripts": {
    "start": "electron .",
    "build": "electron-builder"
  },
  "keywords": [],
  "author": {
    "name": "Andrea Villar",
    "email": "andreavillartr@gmail.com"
  },
  "license": "ISC",
  "devDependencies": {
    "electron": "^33.0.2",
    "electron-builder": "^25.1.8"
  },
  "build": {
    "appId": "tech.andreavillar.app",
    "win": {
      "target": "nsis",
      "icon": "assets/icons/win-icon.ico"
    },
    "mac": {
      "target": "dmg",
      "icon": "assets/icons/mac-icon.icns"
    },
    "linux": {
      "target": [
        "AppImage",
        "deb",
        "rpm"
      ],
      "icon": "assets/icons/mymind-ico.png",
      "category": "Utility"
    }
  }
}
```

### 5. Ejecutar la aplicación

Para ejecutar tu aplicación en modo de desarrollo, usa el siguiente comando:

```bash
npm start
```

### 6. Construir la aplicación

Para crear una versión distribuible de tu aplicación, usa:

```bash
npm run build
```

Esto generará los archivos ejecutables para las plataformas especificadas en la configuración de "build" en package.json.

## Conclusión

Usando Electron, puedes convertir fácilmente cualquier sitio web en una aplicación de escritorio. Este enfoque te permite aprovechar las tecnologías web existentes mientras ofreces una experiencia de aplicación nativa a tus usuarios. Recuerda que debes tener los permisos adecuados para convertir un sitio web en una aplicación de escritorio, especialmente si no eres el propietario del sitio.

Pueden encontrar el repositorio con el código de ejemplo usado en este artículo en el siguiente enlace: [mymind-electron-app](https://github.com/AndreaKinder/mymind-electron-app).