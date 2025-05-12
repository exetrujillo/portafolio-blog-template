<!-- components/BlogList.vue -->

<script setup lang="ts">
import type { ArticleCardProps } from './ArticleCard.vue';

// Definir el tipo esperado para las entradas del blog
export interface BlogPostContent {
  title: string;
  description: string;
  date: string;
  tags?: string[];
  path: string;
  image?: string;
}

const props = defineProps<{
  posts: Array<BlogPostContent> | null | undefined
}>();

const list = computed<ArticleCardProps[]>(() => {
  if (!Array.isArray(props.posts)) {
    return [];
  }

  return props.posts.map(p => {
    const postPath = p.path || '/blog';

    return {
      title: p.title || 'Sin título',
      excerpt: p.description || 'Sin descripción',
      to: postPath,
      date: p.date || '',
      tags: p.tags || [],
      image: p.image,
    };
  });
});
</script>

<template>
  <div class="w-full">
    <ArticleCard
      v-for="(post, index) in list"
      :key="index"
      :title="post.title"
      :excerpt="post.excerpt"
      :to="post.to"
      :date="post.date"
      :tags="post.tags"
      :image="post.image"
    />

    <p v-if="list.length === 0" class="text-center text-gray-500">No hay artículos disponibles.</p>
  </div>
</template>
