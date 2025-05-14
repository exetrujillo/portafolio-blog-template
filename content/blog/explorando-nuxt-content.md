---
title: Explorando Nuxt Content 3.5.1
description: Una pequeña guía sobre cómo utilizar Nuxt Content 3.5.1 para gestionar contenido en tus aplicaciones Nuxt.
date: 2025-04-30
image: /blog-images/blog-aestethic.jpg
---

Nuxt Content 3.5.1 es una potente herramienta para gestionar contenido en aplicaciones Nuxt. Funciona como un sistema de gestión de contenido basado en archivos que te permite escribir en Markdown, JSON, YAML, CSV y más. En este artículo, exploraremos sus características principales y cómo puedes utilizarlo en tus proyectos.

## ¿Qué es Nuxt Content?

Nuxt Content es un módulo para Nuxt que actúa como un sistema de gestión de contenido basado en archivos. Te permite:

- Escribir contenido en Markdown, JSON, YAML, CSV
- Consultar tu contenido con una API similar a MongoDB
- Usar componentes Vue dentro de tus archivos Markdown (MDC)
- Generar sitios estáticos basados en tu contenido
- Integrar fácilmente con herramientas de IA

## Instalación

Para comenzar a utilizar Nuxt Content 3.5.1, primero necesitas instalarlo en tu proyecto Nuxt:

```bash
npm install @nuxt/content
```

Luego, añade el módulo a tu configuración de Nuxt:

```js
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@nuxt/content']
})
```

## Configuración de Colecciones

Una de las novedades más importantes en la versión 3.5.1 es la posibilidad de definir colecciones de contenido. Esto te permite organizar mejor tu contenido y aplicar esquemas de validación:

```js
// content.config.ts
import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'content/blog/**/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.string()
      })
    }),
    docs: defineCollection({
      type: 'page',
      source: 'content/docs/**/*.md'
    })
  }
})
```

## Creando Contenido

Para crear contenido, simplemente añade archivos Markdown en la carpeta `content/` de tu proyecto:

```md
---
title: Mi Primer Artículo
description: Este es un artículo de ejemplo
date: 2024-04-15
---

# Mi Primer Artículo

Este es el contenido de mi primer artículo escrito con Nuxt Content.

## Subtítulo

Puedes usar Markdown completo, incluyendo:
- Listas
- **Negrita**
- *Cursiva*
- [Enlaces](https://nuxt.com)
- Y mucho más
```

## Consultando Contenido

Nuxt Content 3.5.1 proporciona una API mejorada para consultar tu contenido:

```vue
<script setup>
// Obtener un artículo específico
const { data: article } = await useAsyncData('article', () => 
  queryCollection('blog').path('/mi-primer-articulo').first()
)

// Obtener todos los artículos ordenados por fecha
const { data: articles } = await useAsyncData('articles', () => 
  queryCollection('blog').order( 'date', 'DESC').all()
)

// Filtrar artículos
const { data: filteredArticles } = await useAsyncData('filtered', () => 
  queryCollection('blog')
    .where('title', 'LIKE', '%Nuxt%')
    .all()
)
</script>
```

## Componentes en Markdown (MDC)

Una de las características más potentes de Nuxt Content es la capacidad de usar componentes Vue directamente en tus archivos Markdown:

```md
# Mi Artículo con Componentes

::UAlert{type="info" title="Información"}
Este es un componente de alerta dentro de Markdown.
::

## Más ejemplos

::UCard
  ::UButton
    Haz clic aquí
  ::
::
```

Para que esto funcione, necesitas crear componentes con el prefijo adecuado en tu carpeta `components/content/`:

```vue
<!-- components/content/Alert.vue -->
<script setup>
defineProps(['type', 'title'])
</script>

<template>
  <div :class="['alert', `alert-${type}`]">
    <div v-if="title" class="alert-title">{{ title }}</div>
    <div class="alert-content">
      <slot />
    </div>
  </div>
</template>
```

## Soporte para Bases de Datos

Nuxt Content 3.5.1 incluye soporte mejorado para diferentes tipos de bases de datos, lo que es especialmente útil para despliegues sin servidor:

```js
// nuxt.config.ts
export default defineNuxtConfig({
  content: {
    database: {
      // SQLite (por defecto)
      type: 'sqlite',
      
      // PostgreSQL
      // type: 'postgres',
      // url: process.env.POSTGRES_URL,
      
      // Cloudflare D1
      // type: 'd1',
      // binding: 'DB',
    }
  }
})
```

## Integración con IA

Nuxt Content 3.5.1 facilita la integración con herramientas de IA a través del módulo `nuxt-llms`:

```js
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@nuxt/content', 'nuxt-llms'],
  llms: {
    domain: 'https://tu-sitio.com',
    title: 'Nombre de tu Sitio',
    description: 'Una breve descripción de tu sitio',
    sections: [
      {
        title: 'Documentación',
        description: 'Documentación técnica y guías',
        contentCollection: 'docs'
      }
    ]
  }
})
```

Esto genera archivos `llms.txt` que pueden ser utilizados para entrenar modelos de IA basados en tu contenido.

## Rendimiento Mejorado

La versión 3.5.1 incluye importantes mejoras de rendimiento:

- Soporte para SQLite nativo
- Mejor manejo de caché
- Optimización en la carga de contenido
- Reducción del tiempo de compilación

## Conclusión

Nuxt Content 3.5.1 es una herramienta extremadamente versátil para gestionar contenido en aplicaciones Nuxt. Ya sea que estés construyendo un blog, documentación técnica o un sitio web completo, Nuxt Content proporciona las herramientas necesarias para hacerlo de manera eficiente.

Con su API de consulta mejorada, soporte para componentes en Markdown, y opciones flexibles de base de datos, Nuxt Content 3.5.1 se ha convertido en una opción indispensable para desarrolladores de Nuxt que desean gestionar contenido de manera eficiente.

Para más información, consulta la [documentación oficial de Nuxt Content](https://content.nuxt.com/).