# Plantilla Nuxt 3 Portfolio Blog

Una plantilla moderna y completa para crear un sitio web de portafolio personal con blog utilizando Nuxt 3, Nuxt Content, Nuxt Image y Nuxt UI. Diseñada para desarrolladores y creadores de contenido que buscan una solución elegante, personalizable y lista para usar.


## Características

- 🎨 Diseño moderno y responsivo con Nuxt UI  
- 🌓 Modo claro/oscuro integrado con sistema de temas personalizable  
- 📝 Blog con sistema de contenido basado en Markdown  
- 💼 Sección de portafolio para mostrar proyectos  
- 🖼️ Optimización de imágenes con Nuxt Image  
- 🚀 Optimizado para SEO  
- 📱 Totalmente adaptable a dispositivos móviles  
- 🧩 Componentes Vue reutilizables  
- 🎯 Fácil de personalizar y ampliar  
- 📊 Soporte para código y sintaxis resaltada  
- 🔍 Sistema básico de búsqueda y filtrado por etiquetas

## Requisitos Previos  
  
- Node.js (v18 o superior)  
- npm, yarn o pnpm  
- Conocimientos básicos de Vue.js y Nuxt 3 (o ganas de aprender 😉)  
- Familiaridad con Markdown para crear contenido

## Instalación

1. Clona este repositorio:
```bash
git clone https://github.com/exetrujillo/portafolio-blog-template.git  
cd portafolio-blog-template
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
  
- `assets/`: Contiene archivos estáticos.  
  - `css/`: Hojas de estilo CSS.  
    - `main.css`: Archivo principal de estilos utilizado en la aplicación.  
    - Otros archivos CSS son ejemplos que pueden reemplazar el contenido de main.css.  
  
- `components/`: Componentes Vue reutilizables.  
  - `ArticleCard.vue`: Componente para mostrar artículos del blog individualmente.  
  - `BlogList.vue`: Componente que organiza y muestra la lista de artículos del blog.  
  - `ProjectCard.vue`: Componente para mostrar proyectos del portafolio.  
  - `HeroSection.vue`: Componente para la sección principal de la página de inicio.  
  - `Navbar.vue`: Barra de navegación principal.  
  - `Footer.vue`: Pie de página.  
  
- `content/`: Contenido gestionado por Nuxt Content.  
  - `blog/`: Artículos del blog en formato Markdown.  
  - `portfolio/`: Proyectos del portafolio en formato Markdown.  
  
- `layouts/`: Diseños de la aplicación.  
  - `default.vue`: Diseño principal que incluye Navbar y Footer.  
  - `blog-post.vue`: Diseño específico para artículos del blog.  
  - `portfolio-project.vue`: Diseño específico para proyectos del portafolio.  
  
- `pages/`: Páginas de la aplicación (sistema de rutas de Nuxt).  
  - `index.vue`: Página principal.  
  - `About.vue`: Página "Sobre Mí" personalizable.  
  - `blog/`: Páginas relacionadas con el blog.  
    - `index.vue`: Listado de artículos del blog.  
    - `[...slug].vue`: Página de detalle de artículo.  
  - `portfolio/`: Páginas para mostrar proyectos.  
    - `index.vue`: Listado de proyectos.  
    - `[...slug].vue`: Página de detalle de proyecto.  
  
- `public/`: Archivos estáticos servidos directamente.  
  - `favicon.ico`: Icono del sitio.  
  - `robots.txt`: Archivo para control de robots de búsqueda.  
  - `blog-images/`: Imágenes utilizadas en los artículos del blog.  
  - `portfolio-images/`: Imágenes utilizadas en los proyectos del portafolio.

### Nota sobre la modularidad de componentes  
  
El proyecto implementa dos enfoques diferentes para mostrar colecciones de contenido, solo con el propósito de mostrar alternativas, puede elegirse una u otra o combinar ambas según se quiera:  
  
1. **Enfoque directo**: En la sección de portafolio, los componentes `ProjectCard` se utilizan directamente en las páginas.  
  
2. **Enfoque modular**: En la sección de blog, se utiliza un componente intermedio `BlogList` que gestiona la colección de artículos y utiliza `ArticleCard` para mostrar cada uno.  
  
Esta estructura dual sirve como ejemplo de diferentes estrategias de organización de componentes. Puedes adaptar cualquiera de estos enfoques según tus necesidades, por ejemplo:  
- Simplificar el blog eliminando `BlogList` y usando `ArticleCard` directamente.  
- Crear un componente `PortfolioList` similar a `BlogList` para hacer más consistente la estructura.

## Personalización  
  
### Contenido  
  
- **Blog**: Añade tus artículos en formato Markdown en `/content/blog/`. Cada archivo debe incluir:  
  ```md  
  ---  
  title: Título del artículo  
  description: Breve descripción del artículo  
  date: yyyy-mm-dd  
  image: /blog-images/nombre-imagen.jpg (OPCIONAL)  
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
  image: /portfolio-images/nombre-imagen.jpg (OPCIONAL)  
  tags: ['tag1', 'tag2', 'tag3', etc...] (OPCIONAL)  
  ---  
  
  Contenido detallado del proyecto...
  ```
- **Imágenes**: Añade imágenes en `/public/blog-images/` y `/public/portfolio-images/`.
- **Sobre Mí**: Actualiza la página en `/pages/About.vue` con tu información personal.

### Sistema de Temas

La plantilla incluye un sistema de temas completo con modo claro y oscuro:
- **Variables CSS**: El archivo `/assets/css/main.css` contiene todas las variables CSS que definen los colores y estilos para ambos temas.
- **Personalización de colores**: Modifica las variables CSS en `:root` (tema claro) y `.dark` (tema oscuro) para cambiar los colores de la aplicación.
- **Cambio de tema**: El botón de cambio de tema está implementado en en componente `Navbar.vue` y utiliza el módulo `@nuxtjs/color-mode`. 

### Componentes

- **Hero Section**: Personaliza la sección principal de la página de inicio modificando los props en `/pages/index.vue`.
- **Navbar y Footer**: Personaliza la barra de navegación y el pie de página en `/components/Navbar.vue` y `/components/Footer.vue`.
- **Tarjetas de Contenido**: Modifica la apariencia de las tarjetas de blog y portafolio en `/components/ArticleCard.vue` y `/components/ProjectCard.vue`.

### Layouts

- **Layout principal**: Modifica el diseño general de la aplicación en `/layouts/default.vue`.
- **Layouts Específicos**: Personaliza la presentación de artículos y proyectos en `/layouts/blog-post.vue` y en `/layouts/portfolio-project.vue`.

### Páginas de Portafolio y Blog

- **Listado de Contenido**: Personaliza la presentación de listados de artículos y proyectos en `/pages/blog/index.vue` y `/pages/portfolio/index.vue`.
- **Páginas de Detalle**: Modifica la presentación de páginas de detalle de artículos y proyectos en `/pages/blog/[...slug].vue` y `/pages/portfolio/[...slug].vue`.

### Configuración

- Ajusta la configuración de Nuxt en `nuxt.config.ts` según tus necesidades.
- Modifica las colecciones de contenido en `content.config.ts`.

## Despliegue

Esta plantilla está lista para ser desplegada en plataformas como Vercel, Netlify o GitHub Pages. Actualmente está construido para hacer despliegue desde Github hacia Vercel (por eso las configuraciones para Vercel en `nuxt.config.ts` por ejemplo).

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
  
Esta plantilla utiliza las siguientes tecnologías modernas:  
  
- [Nuxt 3](https://nuxt.com/) - Framework Vue de última generación  
- [Vue 3](https://vuejs.org/) - Framework JavaScript progresivo  
- [TypeScript](https://www.typescriptlang.org/) - Superset tipado de JavaScript  
- [Nuxt Content](https://content.nuxt.com/) - Sistema de gestión de contenido basado en Markdown  
- [Nuxt UI](https://ui.nuxt.com/) - Biblioteca de componentes UI para Nuxt  
- [Nuxt Image](https://image.nuxt.com/) - Optimización y transformación de imágenes  
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS de utilidades  
- [@nuxtjs/color-mode](https://color-mode.nuxtjs.org/) - Soporte para modo claro/oscuro

## Ejemplos de Uso

Este documento proporciona ejemplos prácticos para ayudarte a comenzar a utilizar y personalizar esta plantilla de portafolio con blog en Nuxt 3.

### Personalización de la Hero Section

La sección principal de la página de inicio (`HeroSection`) puede personalizarse fácilmente modificando las props en `pages/index.vue`:

```js
<HeroSection 
  name="Tu Nombre"
  title="Desarrollador Web | Diseñador | Creador de Contenido"
  description="Transformando ideas en experiencias digitales únicas. Combino diseño y desarrollo para crear soluciones web elegantes y funcionales."
  primaryButtonText="Ver Proyectos"
  secondaryButtonText="Conóceme"
/>
```

### Creación de un Artículo de Blog

1. Crea un nuevo archivo en `/content/blog/`, por ejemplo `mi-nuevo-articulo.md`
2. Añade el frontmatter y el contenido:

```md
---
title: Mi Nuevo Artículo
description: Una breve descripción de mi artículo
date: 2025-05-13
image: /blog-images/mi-imagen.jpg
tags: ['desarrollo', 'web', 'nuxt']
---
Este es el contenido de mi artículo escrito en Markdown.

## Subtítulo

Puedes usar todas las características de Markdown:

- Listas
- **Texto en negrita**
- *Texto en cursiva*
- [Enlaces](https://ejemplo.com)
- Y mucho más
```

### Creación de un Proyecto de Portafolio

Similar a los artículos de blog, puedes crear proyectos para tu portafolio:

```md
---
title: Mi Proyecto Increíble
description: Una breve descripción de mi proyecto
date: 2025-05-13
image: /portfolio-images/proyecto.jpg
tags: ['vue', 'nuxt', 'tailwind']
---
Descripción detallada del proyecto, sus objetivos y resultados.

## Tecnologías Utilizadas

- Vue.js
- Nuxt 3
- Tailwind CSS

## Características Principales

1. Característica uno
2. Característica dos
3. Característica tres

## Capturas de Pantalla

![Captura 1](/portfolio-images/captura1.jpg)
```

### Personalización del Tema

Puedes personalizar los colores y estilos modificando las variables CSS en `/assets/css/main.css`:

```css
:root {
  /* Colores principales */
  --ui-primary: #3b82f6;
  --ui-primary-rgb: 59, 130, 246;
  
  /* Colores de fondo */
  --ui-bg: #ffffff;
  --ui-bg-secondary: #f9fafb;
  
  /* Colores de texto */
  --ui-text: #1f2937;
  --ui-text-secondary: #4b5563;
}

.dark {
  /* Colores de fondo en modo oscuro */
  --ui-bg: #111827;
  --ui-bg-secondary: #1f2937;
  
  /* Colores de texto en modo oscuro */
  --ui-text: #f9fafb;
  --ui-text-secondary: #d1d5db;
}
```
Estos ejemplos te ayudarán a empezar a personalizar y extender esta plantilla de portafolio para crear tu propio sitio web profesional con Nuxt 3.

## Licencia  
  
Este proyecto está licenciado bajo [MIT License](LICENSE) - consulta el archivo LICENSE para más detalles.

## Recursos Adicionales  
  
Para obtener información más detallada sobre la estructura, componentes y funcionamiento de esta plantilla, puedes consultar la documentación completa en:  
  
- [DeepWiki del Proyecto](https://deepwiki.com/exetrujillo/portafolio-blog-template) - Documentación detallada con explicaciones sobre el sistema de temas, componentes principales y guías de personalización.  
  
En la DeepWiki encontrarás:  
- Explicaciones detalladas del sistema de temas  
- Guías paso a paso para personalizar componentes  
- Ejemplos avanzados de uso  
- Diagramas y visualizaciones de la arquitectura  
- Respuestas a preguntas frecuentes