<!-- components/HeroSection.vue -->
<script setup lang="ts">
interface HeroProps {
  name?: string;
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  showAvatar?: boolean;
}

// Valores por defecto para las props
const props = withDefaults(defineProps<HeroProps>(), {
  name: 'Tu Nombre',
  title: 'Desarrollador Web | Diseñador | Creador',
  description: 'Bienvenido a mi portafolio personal. Aquí encontrarás mis proyectos, artículos y más información sobre mi trabajo.',
  primaryButtonText: 'Ver Portafolio',
  primaryButtonLink: '/portfolio',
  secondaryButtonText: 'Sobre Mí',
  secondaryButtonLink: '/about',
  showAvatar: true,
});
</script>

<template>
  <section class="hero-section relative overflow-hidden py-24 w-full">
    <!-- Fondo decorativo con patrón de puntos -->
    <div class="absolute inset-0 w-full h-full bg-dots opacity-5 z-0"></div>
    
    <!-- Círculos decorativos con efectos de gradiente -->
    <div class="absolute -top-20 -left-20 w-64 h-64 bg-gradient-highlight opacity-20 rounded-full blur-2xl z-0"></div>
    <div class="absolute -bottom-32 -right-20 w-80 h-80 bg-gradient-primary opacity-20 rounded-full blur-3xl z-0"></div>
    
    <div class="w-full relative z-10">
      <div class="max-w-5xl mx-auto text-center px-4">
        <!-- Avatar o logo (condicional) -->
        <div v-if="showAvatar" class="avatar-container mb-8 inline-block">
          <div class="avatar-ring p-1 rounded-full bg-gradient-primary">
            <div class="bg-ui-bg rounded-full p-1">
              <!-- Puedes añadir tu foto o logo aquí -->
              <div class="w-24 h-24 rounded-full bg-ui-border flex items-center justify-center text-2xl font-bold text-ui-primary">
                {{ name.charAt(0) }}
              </div>
            </div>
          </div>
        </div>
        
        <!-- Título principal con nombre sin el efecto typewriter aplicado a todo -->
        <h1 class="text-5xl md:text-6xl font-bold mb-4">
          <span class="text-gradient-highlight">{{ name }}</span>
          <span class="cursor-effect"></span>
        </h1>
        
        <!-- Subtítulo con badges utilizando los colores personalizados -->
        <div class="flex flex-wrap justify-center gap-2 mb-6">
          <span v-for="(skill, index) in title.split('|')" :key="index" 
                class="badge px-3 py-1 rounded-full text-sm font-medium"
                :class="{ 'bg-primary-light': true }">
            {{ skill.trim() }}
          </span>
        </div>
        
        <!-- Descripción -->
        <p class="text-xl mb-8 max-w-2xl mx-auto text-ui-text">
          {{ description }}
        </p>
        
        <!-- Botones con efecto hover usando los colores de la marca -->
        <div class="flex flex-wrap justify-center gap-4">
          <NuxtLink :to="primaryButtonLink" 
                   class="btn-primary px-6 py-3 rounded-full font-medium transition-all hover:scale-105 hover:shadow-lg bg-gradient-primary text-white">
            {{ primaryButtonText }}
          </NuxtLink>
          <NuxtLink :to="secondaryButtonLink" 
                   class="btn-secondary px-6 py-3 rounded-full font-medium transition-all hover:scale-105 border-2 border-ui-primary text-ui-primary">
            {{ secondaryButtonText }}
          </NuxtLink>
        </div>
        
        <!-- Scroll indicator mejorado -->
        <div class="scroll-indicator mt-16">
          <div class="scroll-mouse mx-auto">
            <div class="scroll-wheel"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Patrones de fondo utilizando las variables de color personalizadas */
.bg-dots {
  background-image: radial-gradient(currentColor 1px, transparent 1px);
  background-size: 20px 20px;
}

.avatar-ring {
  box-shadow: 0 0 15px rgba(var(--ui-primary-rgb), 0.5);
}

/* Efecto cursor mejorado */
.cursor-effect {
  display: inline-block;
  width: 3px;
  height: 1.2em;
  background-color: rgb(var(--ui-highlight-rgb));
  margin-left: 4px;
  vertical-align: middle;
  animation: blink 1.1s step-end infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

/* Clases de colores personalizadas */
.bg-ui-bg {
  background-color: var(--ui-bg);
}

.text-ui-primary {
  color: var(--ui-primary);
}

.text-ui-text {
  color: var(--ui-text);
}

.bg-ui-border {
  background-color: var(--ui-border);
}

.border-ui-primary {
  border-color: var(--ui-primary);
}

.bg-primary-light {
  background-color: rgba(var(--ui-primary-rgb), 0.1);
  color: rgb(var(--ui-primary-rgb));
}

/* Añadir transición suave para modo oscuro/claro */
.hero-section {
  transition: background-color 0.3s ease, color 0.3s ease;
}

/* Mejoras para efectos hover en los botones */
.btn-primary:hover {
  box-shadow: 0 0 15px rgba(var(--ui-primary-rgb), 0.5);
}

.btn-secondary:hover {
  background-color: rgba(var(--ui-primary-rgb), 0.1);
}

/* Scroll indicator mejorado */
.scroll-indicator {
  animation: bounce 2s infinite;
}

.scroll-mouse {
  width: 24px;
  height: 40px;
  border: 2px solid var(--ui-border);
  border-radius: 20px;
  position: relative;
}

.scroll-wheel {
  width: 6px;
  height: 6px;
  background-color: rgb(var(--ui-primary-rgb));
  border-radius: 50%;
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  animation: scroll 1.5s ease-in-out infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

@keyframes scroll {
  0% {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateX(-50%) translateY(15px);
  }
}
</style>