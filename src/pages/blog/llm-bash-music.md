---
layout: ../../layouts/Layout.astro
title: LLM, Bash y Musica
author: Andrea Villar
description: Orden de automatizado de una biblioteca de musica.
---
## ¡Revolucionando mi biblioteca musical con Systemprompts, LLMs y Scripts de Bash!

¡Hola a todos, amantes del código y la música! Hoy quiero compartir mi emocionante aventura experimentando con systemprompts y LLMs para darle un giro radical a la organización de mi biblioteca musical en Rhythmbox.

Como desarrolladores, siempre estamos buscando formas de automatizar tareas tediosas y optimizar nuestros flujos de trabajo. Y cuando se trata de mi colección de música, que ha crecido de manera descontrolada a lo largo de los años, ¡la necesidad de orden era urgente!

Fue entonces cuando descubrí el poder de los systemprompts y los LLMs. Decidí probar la herramienta **"Hugging Face Chat"** con el LLM **"NousResearch/Nous-Hermes-2-Mixtral-8x7B-DPO"** y la opción de búsqueda web activada. Mi objetivo: extraer metadatos precisos de mis canciones para llenar los campos vacíos en Rhythmbox.

### **Definiendo el Systemprompt Mágico** 

El primer paso fue crear un systemprompt claro y conciso para guiar al LLM. Aquí está el que utilicé:

```
I give you the name of a song and you have to give me the properties in Spanish:
- Title
- Artist
- Album
- Album artist
- Composer
- Genre
- Track number
- Album number
- Year
- GPM
- Comment
```

#### **¡Manos a la obra!** 

Con mi systemprompt listo, comencé a probarlo con algunas canciones. Los resultados fueron sorprendentes:

**Prompt:** "STRAVAGANZZA - HIJO DE LA LUNA"

**Respuesta:**

```
Title: Hijo de la Luna
Artist: Stravaganzza
Album: EP: "Hijo Del Miedo" (2006)
Album artist: Stravaganzza
Composer: José María Cano
Genre: Rock en Español, Heavy Metal
Track number: 2
Album number: N/A
Year: 2006 (EP release)
GPM: N/A
Comment: N/A
```

¡Increíble! El LLM no solo identificó correctamente la canción, sino que también proporcionó detalles como el compositor, el género e incluso si formaba parte de un EP.

### **Automatizando con Bash** 

Entusiasmada con los resultados, escribí un script en Bash para procesar mi biblioteca musical. Observando que Rhythmbox en preferencias te permite clasificar tu música según la estructura de ficheros, y seleccionando "/Artista/Álbum", escribí un script que intentaba coger los metadatos de la canción y con estos te clasificaba la canción. Si no los encontraba, te preguntaba por el álbum y el artista, y yo, al no saber estos datos, solo tenía que poner el nombre de la canción en el LLM y obtener los datos sin liarme a buscarlos por internet. Y así, automáticamente, se clasificaba todo.

#### **¡Resultados Espectaculares!** 

Mi biblioteca musical, antes un caos, ahora está impecablemente organizada. Gracias a los systemprompts, los LLMs y un poco de magia de Bash, he logrado automatizar una tarea que me habría llevado horas, ¡si no días!

### **Conclusión**

Este proyecto me ha demostrado el increíble potencial de los LLMs y cómo pueden ser aplicados para resolver problemas cotidianos. ¡Las posibilidades son infinitas! Si estás buscando formas de optimizar tus flujos de trabajo o simplemente quieres experimentar con tecnologías de vanguardia, te animo a que explores el mundo de los LLMs. ¡No te arrepentirás!

**¡Hasta la próxima, compañeros desarrolladores!**  Si tienes alguna pregunta o comentario, no dudes en dejarlo abajo. ¡Siempre estoy dispuesta a aprender y compartir conocimientos!

**PD:** Si quieres ver el código completo de mi script en bash, lo puedes encontrar en su repositorio de github:  [Script - GitHub](https://github.com/AndreaKinder/music-classification-script)