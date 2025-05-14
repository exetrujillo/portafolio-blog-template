<!-- components/ArticleCard.vue -->
<script setup lang="ts">
export interface ArticleCardProps {
  title: string;
  excerpt: string;
  to: string;
  date: string;
  tags?: string[];
  image?: string;
}

const props = defineProps<ArticleCardProps>();

// Formatear la fecha
const formattedDate = computed(() => {
  if (!props.date) return 'Fecha no disponible';
  try {
    const date = new Date(props.date);
    if (isNaN(date.getTime())) {
      console.error("ArticleCard: String de fecha inválido:", props.date);
      return props.date; // Fallback
    }
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  } catch (e) {
    console.error("ArticleCard: Error procesando fecha:", props.date, e);
    return 'Error al formatear fecha';
  }
});
</script>

<template>  
  <NuxtLink  
    :to="to"  
    class="article-card-link block w-full group focus:outline-none cursor-pointer"  
  >  
    <div class="article-card-body">  
      <!-- Usamos clases responsive para cambiar el layout según el tamaño de pantalla -->  
      <div :class="[image ? 'flex flex-col md:flex-row md:gap-6 md:items-start' : '']">  
        <div v-if="image" class="flex-shrink-0 mb-4 md:mb-0 w-full md:w-40">  
          <NuxtImg  
            :src="image"  
            :alt="`Imagen principal para ${title}`"  
            class="article-card-image w-full h-auto object-cover rounded-md"  
            loading="lazy"  
          />  
        </div>  
  
        <div class="article-card-content flex-grow">  
          <h2 class="article-card-title">  
            {{ title }}  
          </h2>  
  
          <p class="article-card-excerpt">  
            {{ excerpt }}  
          </p>  
  
          <p  
            v-if="  
              formattedDate !== 'Fecha no disponible' && formattedDate !== 'Error al formatear fecha'  
            "  
            class="article-card-date"  
          >  
            Publicado: {{ formattedDate }}  
          </p>  
  
          <div v-if="tags && tags.length" class="article-card-tags flex flex-wrap gap-2 mt-4">  
            <span v-for="tag in tags" :key="tag" class="article-card-tag">  
              {{ tag }}  
            </span>  
          </div>  
        </div>  
      </div>  
    </div>  
  </NuxtLink>  
</template>

<style scoped>
.article-card-link {
  margin-bottom: 0rem;
}

.article-card-link:hover,
.article-card-link:focus-visible {
  text-decoration: none;
}

.article-card-body {
  border-width: 1px;
  padding: 1.5rem; /* p-6 */
  border-radius: 0.5rem; /* rounded-lg */
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); /* shadow-sm */
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
  width: 100%;
  border-color: var(--ui-border);
  background-color: var(--ui-code-block-bg);
  color: var(--ui-text);
}

.article-card-link:hover .article-card-body,
.article-card-link:focus-visible .article-card-body {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.05);
  transform: scale(1.01);
  border-color: var(--ui-border-accented);
}

/* Estilos del título */
.article-card-title {
  font-weight: 700;
  color: var(--ui-primary);
  font-size: 1.65rem;
  margin-top: 0.1rem;
  margin-bottom: 1rem;
  text-decoration: none;
}

.article-card-link:hover .article-card-title,
.article-card-link:focus-visible .article-card-title {
  text-decoration: none;
}


/* Estilos del extracto */
.article-card-excerpt {
  font-style: italic;
  font-size: 1.125rem; /* text-lg */
  margin-bottom: 1rem; /* mb-4 */
  color: var(--ui-text);
}

/* Estilos de la fecha */
.article-card-date {
  font-size: 0.875rem; /* text-sm */
  margin-bottom: 0.75rem; /* mb-3 */
  color: var(--ui-text);
}

/* Estilos de cada tag */
.article-card-tag {
  font-size: 0.75rem; /* text-xs */
  font-weight: 500; /* font-medium */
  padding: 0.375rem 0.75rem; /* px-3 py-1.5 */
  border-radius: 9999px; /* rounded-full */
  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke;
  transition-duration: 200ms;
  background-color: var(--ui-primary);
  color: var(--ui-bg);
  opacity: 1;
}

/* Cursor */
.cursor-pointer {
  cursor: pointer;
}
</style>