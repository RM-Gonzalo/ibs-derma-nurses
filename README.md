# IBS Derma Nurses

Esta versión moderniza el mock de la clínica estética para usar **React**, **TypeScript** y **Tailwind CSS**. Se mantiene una estructura sencilla sin dependencias instaladas, cargando las librerías desde un CDN.

## Estructura del sitio
- **index.html**: punto de entrada con React, cargando Tailwind y React desde CDNs y enlazando el JS compilado.
- **src/main.tsx**: código TypeScript con componentes React.
- **dist/main.js**: JavaScript generado con `tsc`.
- **about.html**, **services.html**, **contact.html**: páginas estáticas legacy.

## Cómo usarlo
1. Ejecuta `npx tsc` para compilar `src/main.tsx` en `dist/main.js` (ya generado en el repo).
2. Abre `index.html` en tu navegador (no necesitas servidor).
