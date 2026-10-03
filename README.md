# Regalo romántico — GitHub Pages

Proyecto estático listo para publicar en GitHub Pages.

## Archivos

- `index.html` — estructura de la página.
- `style.css` — diseño y animaciones.
- `script.js` — contador, modal, corazones y música.
- `assets/foto.jpg` — coloca aquí tu foto.
- `assets/musica.mp3` — opcional.

## Personalización rápida

Abre `script.js` y cambia:

```js
const START_DATE = "2026-09-03T20:00:00";
```

por la fecha y hora en que comenzó su relación.

En `index.html` puedes cambiar los textos, recuerdos y mensajes.

## Publicar en GitHub Pages

1. Crea un repositorio nuevo en GitHub.
2. Sube `index.html`, `style.css`, `script.js` y la carpeta `assets`.
3. En el repositorio entra a `Settings` → `Pages`.
4. Selecciona `Deploy from a branch`.
5. Elige la rama `main` y la carpeta `/ (root)`.
6. Guarda y espera a que GitHub genere la página.

No necesita servidor, base de datos ni Node.js.

## Nota sobre música

Los navegadores normalmente bloquean la reproducción automática de audio. Por eso la página tiene un botón `♫` para que tu novia pueda activar la música manualmente.
