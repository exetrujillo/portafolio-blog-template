<!-- pages/index.vue -->
<script setup lang="ts">
import { useAsyncData } from '#imports'

// Define una interfaz para el tipo de datos esperado de los posts del blog
interface BlogArticle {
  title: string;
  description: string;
  date: string;
  tags?: string[];
  path: string;
  image?: string;
}

// Define una interfaz para el tipo de datos esperado de los proyectos del portafolio
interface PortfolioProject {
  title: string;
  description: string;
  path: string;
  body?: any;
  image?: string;
  tags?: string[]; // Añadido tags para mostrarlos en las tarjetas
}

// Incluye 'image' y 'tags' en el select para los proyectos destacados
const { data: projects } = await useAsyncData<PortfolioProject[]>('featured-projects', () =>
  queryCollection('portfolio')
    .select('title', 'description', 'path', 'image', 'tags')
    .limit(3)
    .all() as Promise<PortfolioProject[]>
)

// Usa la interfaz BlogArticle para tipar los posts
const { data: posts } = await useAsyncData<BlogArticle[]>('home-recent-posts', () =>
  queryCollection('blog')
    .select('title', 'description', 'date', 'tags', 'path', 'image')
    .limit(4)
    .all() as Promise<BlogArticle[]>
)
</script>

<template>
  <main>
    <!-- Nuevo componente HeroSection -->
    <HeroSection 
      name="Exequiel Trujillo"
      title="Desarrollo Web | Ciencias Sociales | Arte y Cultura"
      description="¡Hola! Bienvenid_ a mi portafolio 😉. Desarrollo con entusiasmo, programo para las ciencias sociales y soy amante de la música. Me interesa la intersección entre tecnología y ciencias sociales."
      primaryButtonText="Mis Proyectos"
      secondaryButtonText="Sobre Mí"
    />

    <!-- Proyectos Destacados -->
    <section class="container mx-auto py-8 px-4">
      <div class="flex justify-between items-center mb-8">
        <h2 class="ml-1 text-3xl font-bold titulo-portafolio">Proyectos Destacados</h2>
        <NuxtLink to="/portfolio" class="text-primary hover:underline">Ver todos →</NuxtLink>
      </div>
      
      <!-- Verificación para debugging -->
      <div v-if="!projects || projects.length === 0" class="text-center p-6 bg-gray-100 rounded-lg">
        No se encontraron proyectos.
      </div>
      
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard
          v-for="(project, index) in projects"
          :key="index"
          :title="project.title || 'Proyecto sin título'"
          :description="project.description || ''"
          :to="project.path || '/portfolio'"
          :image="project.image || ''"
          :tags="project.tags || []"
        />
      </div>
    </section>

    <!-- Artículos Recientes -->
    <section class="container mx-auto py-8 px-4 bg-gray-50 dark:bg-gray-800">
      <div class="flex justify-between items-center mb-8">
        <h2 class="ml-1 text-3xl font-bold titulo-blog">Artículos Recientes</h2>
        <NuxtLink to="/blog" class="text-primary hover:underline">Ver todos →</NuxtLink>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ArticleCard
          v-for="post in posts"
          :key="post.path"
          :title="post.title"
          :excerpt="post.description || ''"
          :to="post.path"
          :date="post.date"
          :tags="post.tags"
          :image="post.image"
        />
      </div>
    </section>
  </main>
</template>

<style scoped>
.titulo-portafolio  {
  color: var(--ui-primary);
}

.titulo-blog  {
  color: var(--ui-primary);
}
</style>