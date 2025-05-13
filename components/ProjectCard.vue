<!-- components/ProjectCard.vue -->
<script setup lang="ts">

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  to: {
    type: String,
    required: true
  },
  image: {
    type: String,
    default: ''
  },
  tags: {
    type: Array as () => string[],
    default: () => []
  }
});

const excerpt = computed(() => {
  if (!props.description || props.description.trim() === '') {
    return 'Haz clic para ver los detalles del proyecto.';
  }
  const maxLength = 120; // Puedes ajustar esto si es necesario
  return props.description.length > maxLength
    ? `${props.description.substring(0, maxLength)}...`
    : props.description;
});
</script>

<!-- components/ProjectCard.vue -->
<template>
  <NuxtLink :to="to" class="project-card-link block w-full group focus:outline-none">
    <!-- UCard ya proporciona muchos estilos de borde, sombra, fondo por defecto -->
    <!-- Quitamos los estilos de hover de shadow y transition del UCard para manejarlos en CSS scoped -->
    <UCard class="project-card-body h-full">
      <div class="project-card-image-container mb-4">
        <NuxtImg
          v-if="image"
          :src="image"
          :alt="title"
          class="project-card-image w-full h-48 object-cover rounded-lg"
          loading="lazy"
        />
        <div v-else class="w-full h-48 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
          <span class="text-gray-400">Sin imagen</span>
        </div>
      </div>

      <h3 class="project-card-title">{{ title }}</h3>

      <p class="project-card-description">{{ excerpt }}</p>

      <div v-if="tags && tags.length" class="project-card-tags flex flex-wrap gap-2">
        <UBadge
          v-for="tag in tags"
          :key="tag"
          color="primary"
          variant="soft"
          size="sm"
          class="mr-1 mb-1"
        >
          {{ tag }}
        </UBadge>
      </div>
    </UCard>
  </NuxtLink>
</template>

<style scoped>
.project-card-link {
  margin-bottom: 0rem;
}

.project-card-link:hover {
  text-decoration: none; /* hover:no-underline */
}

.project-card-body {
  background-color: var(--ui-code-block-bg);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
}

.project-card-link:hover .project-card-body,
.project-card-link:focus-visible .project-card-body {
  transform: scale(1.01); 
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.05); /* Sombra como en ArticleCard */
  border-color: var(--ui-primary); 
}

.dark .project-card-link:hover .project-card-body,
.dark .project-card-link:focus-visible .project-card-body {
  border-color: var(--ui-primary);
}

.project-card-title {
  font-weight: 700; 
  font-size: 1.25rem; 
  margin-bottom: 0.5rem;
  color: var(--ui-primary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.project-card-description {
  margin-bottom: 1rem;
  color: var(--ui-text);
  overflow: hidden;
  max-height: 4.5em; /* Aproximadamente 3 líneas de texto */
}
</style>