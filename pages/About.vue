<!-- pages/About.vue -->
<script setup lang="ts">
const isVisible = ref(false);
const mousePosition = ref({ x: 0, y: 0 });

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true;
  }, 100);
  
  // Event listener para efecto de paralaje
  window.addEventListener('mousemove', handleMouseMove);
});

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove);
});

function handleMouseMove(event: MouseEvent) {
  mousePosition.value = {
    x: event.clientX,
    y: event.clientY
  };
}

// Array de habilidades
const skills = [
  'Desarrollo Web',
  'R/RStudio',
  'Uso de IA',
  'JS/TS',
  'Vue.js/Nuxt',
  'HTML/CSS',
  'Tailwind',
  'Node.js',
  'Python',
  'Google Ads',
  'Campañas Publicitarias',
  'Análisis de Datos',
  'Trabajo en Equipo',
  'Comunicación Efectiva',
  'Adaptabilidad',
  'Creatividad',
  'Resolución de Problemas'
]

// SEO
useHead({
  title: 'Exequiel Trujillo - Programador y Cientista Social',
  meta: [
    { name: 'description', content: 'Conoce más sobre mi experiencia, habilidades y trayectoria profesional.' }
  ]
});
</script>

<template>
  <div class="py-5 px-4 sm:px-6 lg:px-8 min-h-screen relative">
    <!-- Fondo decorativo -->
    <div class="background-pattern absolute inset-0 z-0 opacity-10"></div>
    
    <!-- Elementos decorativos -->
    <div class="decorative-shapes">
      <div class="shape shape-1" :style="{
        transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.01}px)`
      }"></div>
      <div class="shape shape-2" :style="{
        transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.02}px)`
      }"></div>
      <div class="shape shape-3" :style="{
        transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * -0.015}px)`
      }"></div>
    </div>
    
    <!-- Gradiente superior -->
    <div class="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-primary/5 to-transparent z-0"></div>
    
    <!-- Contenido principal -->
    <div class="relative z-10">
      <div class="mb-6 text-center relative">  
        <h1 class="text-5xl font-extrabold relative about-title">
          Sobre Mí
          <span class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-primary rounded-full"></span>
        </h1>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">  
        <!-- Columna de información personal -->  
        <div   
          class="md:col-span-1 transform transition-all duration-500 relative"  
          :class="{ 'opacity-100 translate-y-0': isVisible, 'opacity-0 translate-y-8': !isVisible }"  
        >  
          <UCard class="mb-6 transition-all duration-500 hover:transform hover:scale-105 backdrop-blur-sm bg-opacity-70"  
                :style="{ boxShadow: '0 8px 32px rgba(var(--ui-primary-rgb), 0.15)', backgroundColor: 'var(--ui-bg)' }">  
            <div class="flex justify-center mb-4">  
              <div class="w-32 h-32 rounded-full border-4 overflow-hidden glow-effect"  
                  :style="{ borderColor: 'var(--ui-primary)' }">  
                <NuxtPicture
                  src="/main-images/profile-img.jpeg" 
                  alt="Foto de perfil" 
                  width="128" 
                  height="128" 
                  class="w-full h-full object-cover"
                />
              </div>  
            </div>  
            <h2 class="text-2xl font-semibold mb-2 text-center"  
                :style="{ color: 'var(--ui-primary)' }">Exequiel Trujillo</h2>  
            <p class="text-center mb-4">Desarrollador y Cientista Social</p>  
              
            <div class="space-y-2 mt-6">  
              <div class="flex items-center">  
                <span class="font-semibold mr-2">Email:</span>  
                <a href="mailto:exequiel.trujillo@ug.uchile.cl" class="hover:underline text-(--ui-primary) transition-all duration-300 hover:translate-x-1 inline-block">exequiel.trujillo@ug.uchile.cl</a>  
              </div>
              <div class="flex items-center">  
                <span class="font-semibold mr-2">Ubicación:</span>  
                <span>Santiago, Chile</span>  
              </div>  
            </div>  
              
            <!-- Redes sociales -->  
            <div class="flex justify-center space-x-4 mt-6">  
              <a href="https://www.linkedin.com/in/exequiel-trujillo-62627b12a/" class="text-2xl transition-all duration-300 hover:transform hover:scale-110 hover:text-(--ui-primary)">  
                <span>💼</span>  
              </a>  
              <a href="https://github.com/exetrujillo" class="text-2xl transition-all duration-300 hover:transform hover:scale-110 hover:text-(--ui-primary)">  
                <span>🐈‍⬛</span>  
              </a>  
            </div>  
          </UCard>  
        </div>  
          
        <!-- Columna de contenido principal -->  
        <div class="md:col-span-2">  
          <section   
            class="mb-8 transform transition-all duration-500 relative p-6 rounded-lg backdrop-blur-sm"  
            :class="{ 'opacity-100 translate-y-0': isVisible, 'opacity-0 translate-y-8': !isVisible }"  
            :style="{ transitionDelay: '0.1s', backgroundColor: 'var(--ui-bg)', boxShadow: '0 4px 20px rgba(var(--ui-primary-rgb), 0.08)', borderLeft: '4px solid var(--ui-primary)' }"  
          >  
            <h2 class="text-2xl font-bold mb-4 border-b border-(--ui-border) pb-2"  
                :style="{ color: 'var(--ui-primary)' }">Biografía</h2>  
            <p class="mb-4">  
              Soy una mezcla entre desarrollador web y cientista social... ¡Y eso tiene todo el sentido del mundo!   
              Tengo experiencia en tecnologías frontend y backend, me especializo en construir aplicaciones web modernas y en crear herramientas para las ciencias sociales.  
            </p>  
            <p>  
              Cuando no estoy programando, disfruto de estudiar lenguas🗣️, subir algún cerro 🏔️🚴‍♂️ o de tocar música 🎸. Siempre estoy buscando nuevos desafíos (desearía tener más tiempo para tratar de sortearlos todos)  
              y oportunidades para aprender y crecer profesionalmente.  
            </p>  
          </section>  
            
          <section   
            class="mb-8 transform transition-all duration-500 relative p-6 rounded-lg backdrop-blur-sm"  
            :class="{ 'opacity-100 translate-y-0': isVisible, 'opacity-0 translate-y-8': !isVisible }"  
            :style="{ transitionDelay: '0.2s', backgroundColor: 'var(--ui-bg)', boxShadow: '0 4px 20px rgba(var(--ui-primary-rgb), 0.08)', borderLeft: '4px solid var(--ui-accent)' }"  
          >  
            <h2 class="text-2xl font-bold mb-4 border-b border-(--ui-border) pb-2"  
                :style="{ color: 'var(--ui-primary)' }">Habilidades</h2>
            <div class="flex flex-wrap gap-3 mt-4 justify-center">    
              <UBadge   
                v-for="(skill) in skills"   
                :key="skill"   
                color="primary"   
                variant="soft"  
                size="lg"  
                class="p-2 transition-all duration-300 hover:scale-105 hover:shadow-md"  
              >  
                {{ skill }}  
              </UBadge>  
            </div>    
          </section>  
            
          <section   
            class="transform transition-all duration-500 relative p-6 rounded-lg backdrop-blur-sm"  
            :class="{ 'opacity-100 translate-y-0': isVisible, 'opacity-0 translate-y-8': !isVisible }"  
            :style="{ transitionDelay: '0.3s', backgroundColor: 'var(--ui-bg)', boxShadow: '0 4px 20px rgba(var(--ui-primary-rgb), 0.08)', borderLeft: '4px solid var(--ui-highlight)' }"  
          >  
            <h2 class="text-2xl font-bold mb-4 border-b border-(--ui-border) pb-2"  
                :style="{ color: 'var(--ui-primary)' }">Experiencia</h2>  
            <div class="space-y-6">  
              
              <div class="transition-all duration-500 hover:transform hover:translateY(-2px) p-4 rounded-md hover:shadow-lg"  
                  :style="{ backgroundColor: 'var(--ui-bg)', boxShadow: '0 2px 10px rgba(var(--ui-primary-rgb), 0.05)' }">  
                <h3 class="text-xl font-semibold"  
                    :style="{ color: 'var(--ui-primary)' }">Estudiante de Sociología</h3>  
                <p class="text-sm text-(--ui-text-muted)">Universidad de Chile • 2019 - Presente</p>  
                <p class="mt-2">  
                  Formación académica con fuerte enfoque en el área de programación para las ciencias sociales.
                  Desarrollo de herramientas y metodologías que combinan análisis social con soluciones tecnológicas.
                </p>  
              </div>
              
              <div class="transition-all duration-500 hover:transform hover:translateY(-2px) p-4 rounded-md hover:shadow-lg"  
                  :style="{ backgroundColor: 'var(--ui-bg)', boxShadow: '0 2px 10px rgba(var(--ui-primary-rgb), 0.05)' }">  
                <h3 class="text-xl font-semibold"  
                    :style="{ color: 'var(--ui-primary)' }">Desarrollador Frontend</h3>  
                <p class="text-sm text-(--ui-text-muted)">Freelancer • 2023 - Presente</p>  
                <p class="mt-2">  
                  Desarrollo de aplicaciones web utilizando Vue.js, Nuxt y otras tecnologías modernas.  
                  Implementación de diseños responsivos y optimización de rendimiento.  
                </p>  
              </div>  
            </div>  
          </section>
        </div>
      </div>  
    </div>
  </div>
</template>

<style scoped>
.about-title {
  color: var(--ui-primary);
  position: relative;
  display: inline-block;
  text-shadow: 2px 2px 0px var(--ui-accent);
  padding-bottom: 1rem;
}

/* Fondo con patrón */
.background-pattern {
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2336827D' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

/* Elementos decorativos con formas */
.decorative-shapes {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: 1;
}

.shape {
  position: absolute;
  border-radius: 50%;
  opacity: 0.4;
  filter: blur(40px);
  transition: transform 0.3s ease-out;
}

.shape-1 {
  top: 10%;
  right: 10%;
  width: 350px;
  height: 350px;
  background-color: rgba(var(--ui-primary-rgb), 0.2);
}

.shape-2 {
  bottom: 15%;
  left: 5%;
  width: 250px;
  height: 250px;
  background-color: rgba(var(--ui-accent-rgb), 0.15);
}

.shape-3 {
  top: 40%;
  left: 50%;
  width: 200px;
  height: 200px;
  background-color: rgba(var(--ui-highlight-rgb), 0.1);
}

/* Animaciones para elementos interactivos */  
a, button, .transition-all {
  transition: all 0.3s ease;
}

a:hover, button:hover {
  transform: translateY(-2px);
}

/* Estilo para la tarjeta principal */  
.UCard {
  transition: transform 0.5s ease, box-shadow 0.5s ease;
  background-color: rgba(var(--ui-bg-rgb), 0.7) !important;
}

.UCard:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 12px 30px rgba(var(--ui-primary-rgb), 0.2);
}

/* Efecto de brillo para la foto de perfil */
.glow-effect {
  position: relative;
  box-shadow: 0 0 15px rgba(var(--ui-primary-rgb), 0.5);
}

.glow-effect::after {
  content: '';
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  border-radius: 50%;
  background: linear-gradient(45deg, 
    rgba(var(--ui-primary-rgb), 0) 0%,
    rgba(var(--ui-primary-rgb), 0.3) 50%, 
    rgba(var(--ui-primary-rgb), 0) 100%);
  animation: rotateGlow 4s linear infinite;
  z-index: -1;
  opacity: 0.7;
}

@keyframes rotateGlow {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>