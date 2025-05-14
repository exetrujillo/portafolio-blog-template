<!-- pages/blog/index.vue -->
<script setup lang="ts">
import type { BlogPostContent } from '~/components/BlogList.vue';

const { data: posts } = await useAsyncData<BlogPostContent[]>('blog-page-posts', () =>
  queryCollection('blog')
    .select('title', 'description', 'date', 'tags', 'path', 'image')
    .order('date', 'DESC')
    .limit(50) // Limita a los últimos 50 posts
    .all() as Promise<BlogPostContent[]>
)

// Variable para controlar las animaciones de aparición
const isVisible = ref(false);
onMounted(() => {
  setTimeout(() => {
    isVisible.value = true;
  }, 100);
});

// Establecer título de página descripción para SEO
useHead({
  title: 'Blog - Tu Sitio', // Reemplaza 'Tu Sitio' con el nombre real de tu sitio
  meta: [
    { name: 'description', content: 'Explora los últimos artículos y reflexiones en mi blog personal/profesional.' }
  ]
});
</script>

<template>
  <main class="container mx-auto py-8 px-4">
    <div class="max-w-6xl mx-auto">
      <div class="mb-12 text-center relative">
        <div class="absolute inset-0 flex items-center justify-center -z-10">
          <div class="text-9xl font-black tracking-widest opacity-5"
               :style="{ color: 'var(--ui-primary)' }">BLOG</div>
        </div>

        <h1 class="text-5xl font-extrabold relative blog-title">
          Blog
        </h1>
      </div>

      <BlogList :posts="posts" />
    </div>
  </main>
</template>

<style scoped>
.blog-title {
  color: var(--ui-primary);
  position: relative;
  display: inline-block;
  padding: 0.5rem 1.5rem;
  border-radius: var(--ui-radius);
  background: linear-gradient(135deg, rgba(var(--ui-bg-rgb), 0.8), rgba(var(--ui-bg-rgb), 0.95));
  text-shadow: 2px 2px 0px var(--ui-accent);
}
</style>