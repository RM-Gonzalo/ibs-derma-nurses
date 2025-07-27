# IBS Derma Nurses

Esta versión moderniza el mock de la clínica estética para usar **React**, **TypeScript** y **Tailwind CSS**. Se mantiene una estructura sencilla sin dependencias instaladas, cargando las librerías desde un CDN.

## Estructura del sitio
- **index.html**: punto de entrada, carga React/Tailwind desde CDNs y enlaza el JS compilado.
- **src/main.tsx**: código TypeScript con componentes React.
- **dist/main.js**: JavaScript generado con `tsc`.
- Las antiguas páginas estáticas (**about.html**, **services.html**, **contact.html**) se trasladaron a rutas dentro de React.

## Cómo usarlo
1. Ejecuta `npx tsc src/main.tsx --target ES2017 --module ES2020 --jsx react --outDir dist` para generar `dist/main.js`.
2. Abre `index.html` en tu navegador (no necesitas servidor).
