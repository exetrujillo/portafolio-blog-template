<!-- pages/blog/[slug].vue -->

<script setup lang="ts">

// Define una interfaz para el tipo de datos esperado de un artículo de blog
interface BlogArticle {
  title: string;
  description: string;
  date: string;
  tags?: string[];
  path: string;
  image?: string; // Campo opcional de imagen
  body?: any;
}

const route = useRoute()
const { data: article } = await useAsyncData<BlogArticle>(route.path, () => {
  return queryCollection('blog').path(route.path).select('title', 'description', 'date', 'tags', 'path', 'image', 'body').first() as Promise<BlogArticle>
})

if (!article.value) {
  throw createError({ statusCode: 404, message: 'Artículo no encontrado' })
}

// Para metadatos SEO  
useSeoMeta({  
  title: article.value?.title,  
  description: article.value?.description,  
  ogTitle: article.value?.title,  
  ogDescription: article.value?.description,  
  // Si tienes una imagen, úsala para las tarjetas sociales  
  ogImage: article.value?.image ? article.value.image : undefined,  
})  
  
// Para scripts y otros elementos de head  
useHead({  
  script: [  
    {  
      innerHTML: `  
        document.addEventListener('DOMContentLoaded', function() {  
          const headings = document.querySelectorAll('.prose h2, .prose h3, .prose h4, .prose h5, .prose h6');  
          headings.forEach(heading => {  
            const links = heading.querySelectorAll('a');  
            links.forEach(link => {  
              if (link.classList.contains('header-anchor')) {  
                const parent = link.parentNode;  
                while (link.firstChild) {  
                  parent.insertBefore(link.firstChild, link);  
                }  
                parent.removeChild(link);  
              }  
            });  
          });  
        });  
      `,  
      type: 'text/javascript'  
    }  
  ]  
})
</script>

<template>
  <NuxtLayout name="blog-post">
    <!-- Pasa la imagen al slot del layout -->
    <template #image v-if="article?.image">
      <NuxtPicture
        :src="article.image"
        :alt="`Imagen principal para ${article?.title}`"
        class="w-full object-cover rounded-md"
        loading="lazy"
      />
    </template>

    <template #title>{{ article?.title }}</template>

    <template #description v-if="article?.description">
      {{ article.description }}
    </template>

    <template #meta>
      <div class="flex flex-col gap-2">
        <span v-if="article?.date" class="text-sm"
              :style="{ color: 'var(--ui-text)' }">
          Publicado: {{ new Date(article.date).toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          }) }}
        </span>
      </div>
    </template>

    <template #tags v-if="article?.tags && article.tags.length > 0">
      <span v-for="tag in article.tags"
            :key="tag"
            class="text-xs font-medium px-3 py-1.5 rounded-full transition-colors duration-200"
            :style="{
              backgroundColor: 'var(--ui-primary)',
              color: 'var(--ui-bg)',
              opacity: '1'
            }">
        {{ tag }}
      </span>
    </template>

    <ContentRenderer v-if="article" :value="article" />
  </NuxtLayout>
</template>

<style>
.prose h2 a,
.prose h3 a,
.prose h4 a,
.prose h5 a,
.prose h6 a {
  color: inherit !important;
  text-decoration: none !important;
  border-bottom: none !important;
  cursor: text !important;
}

.header-anchor {
  display: none !important;
}
</style>