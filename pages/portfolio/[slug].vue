<!-- pages/portfolio/[slug].vue -->
<script setup lang="ts">
import { useAsyncData } from '#imports'
import { NuxtImg, UBadge } from '#components'

interface PortfolioProject {
  title: string;
  description: string;
  date?: string;
  tags?: string[];
  path: string;
  body: any;
  image?: string;
}

const route = useRoute()
const { data: project } = await useAsyncData<PortfolioProject>(route.path, () => {
  return queryCollection('portfolio').path(route.path).select('title', 'description', 'date', 'tags', 'path', 'body', 'image').first() as Promise<PortfolioProject>
})

if (!project.value) {
  throw createError({ statusCode: 404, message: 'Proyecto no encontrado' })
}

// Para metadatos SEO  
useSeoMeta({  
  title: project.value?.title,  
  description: project.value?.description,  
  ogTitle: project.value?.title,  
  ogDescription: project.value?.description,  
  ogImage: project.value?.image ? project.value.image : undefined,  
})  
  
// Para scripts y otros elementos de head  
useHead({  
  script: [  
    {  
      innerHTML: `  
        document.addEventListener('DOMContentLoaded', function() {  
          const proseContent = document.querySelector('.prose');  
          if (proseContent) {  
            const headings = proseContent.querySelectorAll('h2, h3, h4, h5, h6');  
            headings.forEach(heading => {  
              const links = heading.querySelectorAll('.header-anchor');  
              links.forEach(link => {  
                link.parentNode?.removeChild(link);  
              });  
            });  
          }  
        });  
      `,  
      type: 'text/javascript'  
    }  
  ]  
})
</script>

<template>
  <NuxtLayout name="portfolio-project">
    <!-- Pasa la imagen al slot del layout si existe -->
    <template #image v-if="project?.image">
       <NuxtImg
        :src="project.image"
        :alt="`Imagen principal para ${project?.title}`"
        class="w-full object-cover rounded-lg"
        loading="lazy"
      />
    </template>

    <template #title>{{ project?.title }}</template>

    <template #description v-if="project?.description">
      {{ project.description }}
    </template>

    <template #tags v-if="project?.tags && project.tags.length > 0">
      <UBadge
        v-for="tag in project.tags"
        :key="tag"
        color="primary"
        variant="soft"
        class="mr-2"
      >
        {{ tag }}
      </UBadge>
    </template>

    <template #meta>
      <span v-if="project?.date">
        Publicado: {{ new Date(project.date).toLocaleDateString('es-ES', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }) }}
      </span>
    </template>

    <ContentRenderer v-if="project" :value="project" />
  </NuxtLayout>
</template>

<style>
/* Estilos para deshabilitar anclajes automáticos */
.prose h2 a.header-anchor,
.prose h3 a.header-anchor,
.prose h4 a.header-anchor,
.prose h5 a.header-anchor,
.prose h6 a.header-anchor {
  display: none !important;
  pointer-events: none !important;
}

.lg\:col-span-1.sticky.top-8.self-start a {
   pointer-events: auto !important;
   opacity: 1 !important;
   position: static !important;
   text-decoration: none !important;
}
</style>