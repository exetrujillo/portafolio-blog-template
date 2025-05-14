<!-- layouts/portfolio-project.vue -->
<template>
  <div class="max-w-6xl mx-auto py-8 px-4">

    <div class="mb-8">
        <h1 class="text-4xl font-bold mt-4 mb-2" :style="{ color: 'var(--ui-primary)' }">
          <slot name="title" />
        </h1>

        <p v-if="$slots.description" class="italic text-xl mb-4" :style="{ color: 'var(--ui-text)' }">
            <slot name="description" />
        </p>

        <div class="flex flex-wrap gap-2 mb-4">
          <slot name="tags" />
        </div>

        <div class="text-sm text-ui-text opacity-75 mb-6">
          <slot name="meta" />
        </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start"> 

      <div class="lg:col-span-2">
        <div v-if="$slots.image" class="mb-8">
          <slot name="image" />
        </div>

        <!-- Contenido del Proyecto (Prose). El selector .prose apunta a este div. -->
         <div class="prose dark:prose-invert max-w-none" :style="{ color: 'var(--ui-text)' }">
          <slot />
        </div>
      </div>


      <div class="lg:col-span-1 sticky top-8 self-start portfolio-toc-container">
        <div v-if="processedHeadings.length > 0" class="border p-4 rounded-lg"
             :style="{
               borderColor: 'var(--ui-border)',
               backgroundColor: 'var(--ui-code-block-bg)',
               color: 'var(--ui-text)'
             }">
          <h2 class="text-lg font-semibold mb-3"
              :style="{ color: 'var(--ui-highlight)' }">
            Índice del Proyecto
          </h2>
          <component :is="renderTocLinks(processedHeadings)" />
        </div>
      </div>

    </div> 

  </div> 
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick, computed, h, type VNode } from 'vue';

// Define el tipo para un enlace del índice de contenidos (manual)
interface ManualTocLink {
  id: string;
  text: string;
  level: number;
  children: ManualTocLink[];
}

// Implementación manual del índice de contenidos
const headings = ref<ManualTocLink[]>([]);

const extractHeadings = async () => {
  await nextTick();

  // Seleccionar todos los encabezados h2-h6 dentro del CONTENEDOR DEL CONTENIDO PROSE
  // El slot por defecto de este layout contiene el <div class="prose ...">
  const articleContentContainer = document.querySelector('.prose');

  if (!articleContentContainer) {
      console.warn('Contenedor .prose no encontrado en el layout. No se puede generar el índice.');
      return;
  }

  const headingElements = articleContentContainer.querySelectorAll('h2, h3, h4, h5, h6');

  const extractedHeadings: ManualTocLink[] = [];

  headingElements.forEach((el) => {
    const level = parseInt(el.tagName.substring(1));

    const id = el.id || el.textContent
        ?.toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/^(\d)/, '_$1');

    if (!id || !el.textContent?.trim()) return;

    extractedHeadings.push({
      id: id,
      text: el.textContent.trim(),
      level: level,
      children: []
    });
  });

  headings.value = extractedHeadings;
};

onMounted(() => {
  setTimeout(extractHeadings, 150);
});

const processedHeadings = computed<ManualTocLink[]>(() => {
  const result: ManualTocLink[] = [];
  const stack: ManualTocLink[] = [];

  headings.value.forEach(heading => {
    const newHeading: ManualTocLink = { id: heading.id, text: heading.text, level: heading.level, children: [] };

    while (stack.length > 0 && stack[stack.length - 1].level >= newHeading.level) {
      stack.pop();
    }

    if (stack.length > 0) {
      const parent = stack[stack.length - 1];
      parent.children.push(newHeading);
    } else {
      if (newHeading.level >= 2) {
         result.push(newHeading);
         stack.push(newHeading);
      } else {
          console.warn(`Encabezado de nivel inesperado ${newHeading.level} encontrado al principio del procesamiento. Se esperaba H2+.`);
          result.push(newHeading);
      }
    }

    if (newHeading.level < 6) {
      stack.push(newHeading);
    }
  });

  return result;
});

function renderTocLinks(links: ManualTocLink[] | undefined | null): VNode | null {
  if (!links || links.length === 0) return null;

  return h('ul', { class: 'ml-4 space-y-1' }, links.map((link: ManualTocLink) =>
    h('li', { key: link.id }, [
      h('a', { href: `#${link.id}`, class: 'text-sm hover:underline text-ui-text' }, link.text),
      link.children && link.children.length > 0 ? renderTocLinks(link.children) : null
    ])
  ));
}
</script>

<style scoped>
ol {
  margin: 0;
  counter-reset: item;
}

ol > li {
  counter-increment: item;
  display: block;
}

ol > li:before {
  content: counters(item, ".") ". ";
  display: inline-block;
  margin-right: 0.5rem;
}

ol {
  list-style-type: none;
  padding-left: 1rem;
}

a {
  display: inline-block;
  padding: 0.25rem 0;
  text-decoration: none;
}

a:hover {
  opacity: 0.8;
}
</style>