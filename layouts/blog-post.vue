<!-- layouts/blog-post.vue -->

<script setup>
import { ref, onMounted, nextTick } from 'vue';

const headings = ref([]);

const extractHeadings = async () => {
  await nextTick();

  const headingElements = document.querySelectorAll('.prose h2, .prose h3, .prose h4, .prose h5, .prose h6');

  const extractedHeadings = [];

  headingElements.forEach((el) => {
    const level = parseInt(el.tagName.substring(1));

    if (!el.id) {
      el.id = el.textContent
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-');
    }

    extractedHeadings.push({
      id: el.id,
      text: el.textContent,
      level: level
    });
  });

  headings.value = extractedHeadings;
};

onMounted(() => {
  setTimeout(extractHeadings, 100);
});

const processedHeadings = computed(() => {
  const result = [];
  let currentH2 = null;
  let currentH3 = null;
  let currentH4 = null;
  let currentH5 = null;

  headings.value.forEach(heading => {
    if (heading.level === 2) {
      currentH2 = { ...heading, children: [] };
      currentH3 = null;
      currentH4 = null;
      currentH5 = null;
      result.push(currentH2);
    } else if (heading.level === 3 && currentH2) {
      currentH3 = { ...heading, children: [] };
      currentH4 = null;
      currentH5 = null;
      currentH2.children.push(currentH3);
    } else if (heading.level === 4 && currentH3) {
      currentH4 = { ...heading, children: [] };
      currentH5 = null;
      currentH3.children.push(currentH4);
    } else if (heading.level === 5 && currentH4) {
      currentH5 = { ...heading, children: [] };
      currentH4.children.push(currentH5);
    } else if (heading.level === 6 && currentH5) {
      currentH5.children.push({ ...heading, children: [] });
    }
  });

  return result;
});
</script>

<template>
  <div class="max-w-3xl mx-auto py-8 px-4">

    <!-- Mueve este bloque AHORA PRIMERO -->
    <div class="mb-8 border p-6 rounded-lg shadow-sm"
         :style="{
           borderColor: 'var(--ui-border)',
           backgroundColor: 'var(--ui-code-block-bg)',
           color: 'var(--ui-text)'
         }">
      <h1 class="font-bold"
          :style="{
            color: 'var(--ui-primary)',
            fontSize: '2.25rem',
            marginTop: '0.1rem',
            marginBottom: '1rem',
            fontWeight: 700
          }">
        <slot name="title" />
      </h1>

      <p v-if="$slots.description" class="italic text-lg mb-4"
         :style="{ color: 'var(--ui-text)' }">
        <slot name="description" />
      </p>

      <div class="text-sm opacity-75 mb-4">
        <slot name="meta" />
      </div>

      <div v-if="$slots.tags" class="flex flex-wrap gap-2 mt-4">
        <slot name="tags">
        </slot>
      </div>
    </div>

    <!-- Mueve este bloque AHORA SEGUNDO -->
    <div v-if="$slots.image" class="mb-8">
      <slot name="image" />
    </div>

    <div v-if="headings.length > 0" class="mb-8 border p-4 rounded-lg"
         :style="{
           borderColor: 'var(--ui-border)',
           backgroundColor: 'var(--ui-code-block-bg)',
           color: 'var(--ui-text)'
         }">
      <h2 class="text-lg font-semibold mb-3"
          :style="{ color: 'var(--ui-highlight)' }">
        Índice de contenidos
      </h2>

      <ol class="list-decimal pl-5 space-y-1">
        <li v-for="(h2, index) in processedHeadings" :key="h2.id">
          <a :href="`#${h2.id}`"
             class="hover:underline transition-colors"
             :style="{ color: 'var(--ui-text)' }">
            {{ h2.text }}
          </a>

          <ol v-if="h2.children.length > 0" class="list-decimal pl-5 mt-1 mb-1">
            <li v-for="h3 in h2.children" :key="h3.id">
              <a :href="`#${h3.id}`"
                 class="hover:underline transition-colors"
                 :style="{ color: 'var(--ui-text)', fontSize: '0.95rem' }">
                {{ h3.text }}
              </a>

              <ol v-if="h3.children.length > 0" class="list-decimal pl-5 mt-1 mb-1">
                <li v-for="h4 in h3.children" :key="h4.id">
                  <a :href="`#${h4.id}`"
                     class="hover:underline transition-colors"
                     :style="{ color: 'var(--ui-text)', fontSize: '0.9rem' }">
                    {{ h4.text }}
                  </a>

                  <ol v-if="h4.children.length > 0" class="list-decimal pl-5 mt-1 mb-1">
                    <li v-for="h5 in h4.children" :key="h5.id">
                      <a :href="`#${h5.id}`"
                         class="hover:underline transition-colors"
                         :style="{ color: 'var(--ui-text)', fontSize: '0.85rem' }">
                        {{ h5.text }}
                      </a>

                      <ol v-if="h5.children.length > 0" class="list-decimal pl-5 mt-1 mb-1">
                        <li v-for="h6 in h5.children" :key="h6.id">
                          <a :href="`#${h6.id}`"
                             class="hover:underline transition-colors"
                             :style="{ color: 'var(--ui-text)', fontSize: '0.8rem' }">
                            {{ h6.text }}
                          </a>
                        </li>
                      </ol>
                    </li>
                  </ol>
                </li>
              </ol>
            </li>
          </ol>
        </li>
      </ol>
    </div>

    <div class="prose dark:prose-invert max-w-none"
         :style="{ color: 'var(--ui-text)' }">
      <slot />
    </div>
  </div>
</template>

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