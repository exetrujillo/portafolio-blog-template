# Plantilla Nuxt 3 Portfolio Blog

Una plantilla para crear un sitio web de portafolio personal con blog utilizando Nuxt 3, Nuxt Content 3.5.1 y Nuxt UI.

## Características

- 🎨 Diseño moderno y responsivo con Nuxt UI
- 🌓 Modo claro/oscuro integrado
- 📝 Blog con sistema de contenido basado en Markdown
- 💼 Sección de portafolio para mostrar proyectos
- 🚀 Optimizado para SEO
- 🧩 Componentes Vue reutilizables
- 🎯 Fácil de personalizar y ampliar

## Requisitos Previos

- Node.js (v18 o superior)
- npm, yarn o pnpm

## Instalación

1. Clona este repositorio:
```bash
git clone https://github.com/exetrujillo/nuxt-portfolio-blog.git
cd nuxt-portfolio-blog
```

2. Instala las dependencias:
```bash
npm install
# o con yarn
yarn install
# o con pnpm
pnpm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
# o con yarn
yarn dev
# o con pnpm
pnpm dev
```

4. Abre http://localhost:3000 en tu navegador (u otro en caso de que ese puerto esté ocupado)

## Estructura del Proyecto

- `assets/`: Contiene archivos estáticos, principalmente el 'main.css'.
- `components/`: Componentes Vue reutilizables para la interfaz.
- `content/`:
  - `blog/`: Artículos del blog en formato Markdown.
  - `portfolio/`: Proyectos del portafolio en formato Markdown.
- `layouts/`: Diseños de la aplicación.
- `pages/`: Páginas de la aplicación siguiendo el sistema de rutas de Nuxt.
  - `blog/`: Páginas relacionadas con el blog.
  - `portfolio/`: Páginas para mostrar proyectos.
- `public/`: Archivos estáticos servidos directamente.

## Personalización

### Contenido

- **Blog**: Añade tus artículos en formato Markdown en `/content/blog/`. Cada archivo debe incluir:
  ```md
  ---
  title: Título del artículo
  description: Breve descripción del artículo
  date: yyyy-mm-dd
  tags: ['tag1', 'tag2', 'tag3', etc...] (OPCIONAL)
  ---
  
  Contenido del artículo...
  ```

- **Portfolio**: Añade tus proyectos en `/content/portfolio/`. Cada archivo debe incluir:
  ```md
  ---
  title: Nombre del Proyecto
  description: Descripción breve del proyecto
  date: yyyy-mm-dd
  tags: ['tag1', 'tag2', 'tag3', etc...] (OPCIONAL)
  ---
  
  Contenido detallado del proyecto...
  ```

- **Sobre Mí**: Actualiza la página en `/pages/About.vue` con tu información personal.

### Estilos

- Los estilos principales se encuentran en `/assets/css/main.css`.
- Los colores, tamaños y otras variables se pueden personalizar a través del sistema de UI de Nuxt.
- Modifica los componentes en `/components/` para personalizar la apariencia, aquí encuentras el Navbar y el Footer, además de componentes de la sección de Blog y Portafolio.
- Modifica también los layout en `/layouts/` para personalizar el diseño general.

### Configuración

- Ajusta la configuración de Nuxt en `nuxt.config.ts` según tus necesidades.
- Modifica las colecciones de contenido en `content.config.ts`.

## Despliegue

Esta plantilla está lista para ser desplegada en plataformas como Vercel, Netlify o GitHub Pages.

```bash
# Construir para producción
npm run build
# o con yarn
yarn build
# o con pnpm
pnpm build

# Vista previa de la versión de producción
npm run preview
# o con yarn
yarn preview
# o con pnpm
pnpm preview
```

## Tecnologías utilizadas

- [Nuxt 3](https://nuxt.com/)
- [Nuxt Content](https://content.nuxt.com/)
- [Nuxt UI](https://ui.nuxt.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## Licencia

[MIT](LICENSE)