<!-- pages/portfolio/index.vue -->
<script setup lang="ts">

interface PortfolioProject {
  title: string;
  description: string;
  date: string;
  tags?: string[];
  path: string;
  image?: string;
}

const { data: projects } = await useAsyncData<PortfolioProject[]>('portfolio-projects', () =>
  queryCollection('portfolio')
    .select('title', 'description', 'date', 'path', 'image', 'tags')
    .order('date', 'DESC')
    .all() as Promise<PortfolioProject[]>
)

const activeFilter = ref('todos');

const categories = computed(() => {
  if (!projects.value) return ['todos'];
  
  const allTags = projects.value
    .flatMap(project => project.tags || [])
    .filter((tag, index, self) => self.indexOf(tag) === index);
  
  return ['todos', ...allTags];
});

const filteredProjects = computed(() => {
  if (!projects.value) return [];
  if (activeFilter.value === 'todos') return projects.value;
  
  return projects.value.filter(project => 
    project.tags?.includes(activeFilter.value)
  );
});

const setFilter = (filter: string) => {
  activeFilter.value = filter;
};

const isVisible = ref(false);
onMounted(() => {
  setTimeout(() => {
    isVisible.value = true;
  }, 100);
});

useHead({
  title: 'Portafolio - Mis Proyectos',
  meta: [
    { name: 'description', content: 'Explora mi colección de proyectos profesionales y personales.' }
  ]
});
</script>

<template>
  <main class="container mx-auto py-8 px-4">
    <div class="max-w-6xl mx-auto">
      <div class="mb-12 text-center relative">
        <div class="absolute inset-0 flex items-center justify-center -z-10">
          <div class="text-9xl font-black tracking-widest opacity-5"
               :style="{ color: 'var(--ui-primary)' }">PROYECTOS</div>
        </div>

        <h1 class="text-5xl font-extrabold relative portfolio-title">
          Portafolio
        </h1>

        <!-- Filtros de categorías -->
        <div class="flex flex-wrap justify-center gap-3 mt-8" 
             :class="{ 'opacity-100 translate-y-0': isVisible, 'opacity-0 translate-y-4': !isVisible }"
             style="transition: all 0.6s ease-out;">
          <button 
            v-for="category in categories" 
            :key="category"
            @click="setFilter(category)"
            class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
            :class="{ 
              'transform scale-105': activeFilter === category,
              'opacity-70 hover:opacity-100': activeFilter !== category
            }"
            :style="{
              backgroundColor: activeFilter === category ? 'var(--ui-primary)' : 'transparent',
              color: activeFilter === category ? 'var(--ui-bg)' : 'var(--ui-primary)',
              border: activeFilter === category ? '2px solid var(--ui-primary)' : '2px solid var(--ui-border)'
            }">
            {{ category }}
          </button>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(project, index) in filteredProjects" 
          :key="project.path"
          class="transform transition-all duration-500"
          :class="{ 
            'opacity-100 translate-y-0': isVisible, 
            'opacity-0 translate-y-8': !isVisible 
          }"
          :style="{ transitionDelay: `${index * 0.1}s` }"
        >
          <ProjectCard
            :title="project.title"
            :description="project.description"
            :to="project.path"
            :image="project.image"
            :tags="project.tags"
          />
        </div>
      </div>

      <div v-if="filteredProjects.length === 0" class="text-center py-16">
        <div class="text-6xl mb-4">🔍</div>
        <h3 class="text-2xl font-bold mb-2">No hay proyectos en esta categoría</h3>
        <p class="text-lg">Intenta seleccionar otra categoría o vuelve a "all" para ver todos los proyectos.</p>
        <button 
          @click="setFilter('all')"
          class="mt-6 px-6 py-2 rounded-md font-medium transition-all duration-300"
          :style="{
            backgroundColor: 'var(--ui-primary)',
            color: 'var(--ui-bg)',
          }">
          Ver todos los proyectos
        </button>
      </div>
      
      <!-- Sección de CTA -->
      <div class="mt-20 text-center p-8 rounded-xl relative overflow-hidden"
           :style="{ backgroundColor: 'var(--ui-bg)', boxShadow: '0 4px 20px rgba(var(--ui-primary-rgb), 0.1)' }">
        <div class="absolute top-0 left-0 w-full h-1"
             :style="{ backgroundColor: 'var(--ui-accent)' }"></div>
        <div class="absolute top-0 left-0 w-1 h-full"
             :style="{ backgroundColor: 'var(--ui-accent)' }"></div>
        <div class="absolute bottom-0 right-0 w-full h-1"
             :style="{ backgroundColor: 'var(--ui-primary)' }"></div>
        <div class="absolute top-0 right-0 w-1 h-full"
             :style="{ backgroundColor: 'var(--ui-primary)' }"></div>
             
        <h2 class="text-3xl font-bold mb-4"
            :style="{ color: 'var(--ui-primary)' }">¿Te interesa mi trabajo?</h2>
        <p class="text-lg max-w-2xl mx-auto mb-8"
           :style="{ color: 'var(--ui-text)' }">
          Si te gusta mi trabajo y estás pensando en un proyecto, no dudes en contactarme, en mi página 'Sobre Mí' encontrarás mis datos de contacto.
        </p>
        <a href="/about" 
           class="inline-block px-8 py-3 rounded-md font-medium text-lg transition-all duration-300 hover:transform hover:scale-105"
           :style="{ 
             backgroundColor: 'var(--ui-primary)',
             color: 'var(--ui-bg)',
             boxShadow: '0 4px 10px rgba(var(--ui-primary-rgb), 0.3)'
           }">
          Contáctame
        </a>
      </div>
    </div>
  </main>
</template>

<style scoped>
.portfolio-title {
  color: var(--ui-primary);
  position: relative;
  display: inline-block;
  padding: 0.5rem 1.5rem;
  border-radius: var(--ui-radius);
  background: linear-gradient(135deg, rgba(var(--ui-bg-rgb), 0.8), rgba(var(--ui-bg-rgb), 0.95));
  text-shadow: 2px 2px 0px var(--ui-accent);
}

button {
  transition: all 0.3s ease;
}

button:hover {
  transform: translateY(-2px);
}

.rounded-xl {
  transition: transform 0.5s ease, box-shadow 0.5s ease;
}

.rounded-xl:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(var(--ui-primary-rgb), 0.15);
}
</style>