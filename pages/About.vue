<!-- pages/About.vue -->  
  
<script setup lang="ts">  
const isVisible = ref(false);  
onMounted(() => {  
  setTimeout(() => {  
    isVisible.value = true;  
  }, 100);  
});  
  
// SEO  
useHead({  
  title: 'Sobre Mí - Mi Perfil',  
  meta: [  
    { name: 'description', content: 'Conoce más sobre mi experiencia, habilidades y trayectoria profesional.' }  
  ]  
});  
</script>  
  
<template>  
  <div class="py-8">  
    <div class="mb-12 text-center relative">    
      <h1 class="text-5xl font-extrabold mb-6 relative about-title">  
        Sobre Mí  
      </h1>
    </div>  
      
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">  
      <!-- Columna de información personal -->  
      <div   
        class="md:col-span-1 transform transition-all duration-500"  
        :class="{ 'opacity-100 translate-y-0': isVisible, 'opacity-0 translate-y-8': !isVisible }"  
      >  
        <UCard class="mb-6 transition-all duration-500 hover:transform hover:translateY(-5px)"  
               :style="{ boxShadow: '0 4px 20px rgba(var(--ui-primary-rgb), 0.1)' }">  
          <div class="flex justify-center mb-4">  
            <!-- Placeholder para foto de perfil -->  
            <div class="w-32 h-32 rounded-full bg-(--ui-bg-elevated) flex items-center justify-center text-3xl border-2"  
                 :style="{ borderColor: 'var(--ui-primary)' }">  
              👤  
            </div>  
          </div>  
          <h2 class="text-2xl font-semibold mb-2 text-center"  
              :style="{ color: 'var(--ui-primary)' }">Tu Nombre</h2>  
          <p class="text-center mb-4">Desarrollador Web</p>  
            
          <div class="space-y-2 mt-6">  
            <div class="flex items-center">  
              <span class="font-semibold mr-2">Email:</span>  
              <a href="mailto:tu@email.com" class="hover:underline text-(--ui-primary) transition-all duration-300 hover:translate-x-1 inline-block">tu@email.com</a>  
            </div>  
            <div class="flex items-center">  
              <span class="font-semibold mr-2">Ubicación:</span>  
              <span>Tu Ciudad, País</span>  
            </div>  
          </div>  
            
          <!-- Redes sociales -->  
          <div class="flex justify-center space-x-4 mt-6">  
            <a href="#" class="text-2xl transition-all duration-300 hover:transform hover:scale-110 hover:text-(--ui-primary)">  
              <span>🐦</span>  
            </a>  
            <a href="#" class="text-2xl transition-all duration-300 hover:transform hover:scale-110 hover:text-(--ui-primary)">  
              <span>💼</span>  
            </a>  
            <a href="#" class="text-2xl transition-all duration-300 hover:transform hover:scale-110 hover:text-(--ui-primary)">  
              <span>📷</span>  
            </a>  
            <a href="#" class="text-2xl transition-all duration-300 hover:transform hover:scale-110 hover:text-(--ui-primary)">  
              <span>🐙</span>  
            </a>  
          </div>  
        </UCard>  
      </div>  
        
      <!-- Columna de contenido principal -->  
      <div class="md:col-span-2">  
        <section   
          class="mb-8 transform transition-all duration-500"  
          :class="{ 'opacity-100 translate-y-0': isVisible, 'opacity-0 translate-y-8': !isVisible }"  
          :style="{ transitionDelay: '0.1s' }"  
        >  
          <h2 class="text-2xl font-bold mb-4 border-b border-(--ui-border) pb-2"  
              :style="{ color: 'var(--ui-primary)' }">Biografía</h2>  
          <p class="mb-4">  
            Soy un desarrollador web apasionado por crear experiencias digitales atractivas y funcionales.   
            Con experiencia en tecnologías frontend y backend, me especializo en construir aplicaciones web modernas.  
          </p>  
          <p>  
            Cuando no estoy programando, disfruto de [tus hobbies o intereses]. Siempre estoy buscando nuevos desafíos   
            y oportunidades para aprender y crecer profesionalmente.  
          </p>  
        </section>  
          
        <section   
          class="mb-8 transform transition-all duration-500"  
          :class="{ 'opacity-100 translate-y-0': isVisible, 'opacity-0 translate-y-8': !isVisible }"  
          :style="{ transitionDelay: '0.2s' }"  
        >  
          <h2 class="text-2xl font-bold mb-4 border-b border-(--ui-border) pb-2"  
              :style="{ color: 'var(--ui-primary)' }">Habilidades</h2>  
          <div class="grid grid-cols-2 md:grid-cols-3 gap-4">  
            <div v-for="(skill, index) in ['JavaScript/TypeScript', 'Vue.js/Nuxt', 'HTML/CSS', 'Tailwind CSS', 'Node.js', 'Git']"   
                 :key="skill"  
                 class="transition-all duration-300 hover:transform hover:translateY(-2px) p-3 rounded-md"  
                 :style="{   
                   backgroundColor: 'var(--ui-bg-elevated)',   
                   border: '1px solid var(--ui-border)',  
                   transitionDelay: `${0.05 * index}s`  
                 }">  
              {{ skill }}  
            </div>  
          </div>  
        </section>  
          
        <section   
          class="transform transition-all duration-500"  
          :class="{ 'opacity-100 translate-y-0': isVisible, 'opacity-0 translate-y-8': !isVisible }"  
          :style="{ transitionDelay: '0.3s' }"  
        >  
          <h2 class="text-2xl font-bold mb-4 border-b border-(--ui-border) pb-2"  
              :style="{ color: 'var(--ui-primary)' }">Experiencia</h2>  
          <div class="space-y-6">  
            <div class="transition-all duration-500 hover:transform hover:translateY(-2px) p-4 rounded-md"  
                 :style="{ backgroundColor: 'var(--ui-bg)', boxShadow: '0 2px 10px rgba(var(--ui-primary-rgb), 0.05)' }">  
              <h3 class="text-xl font-semibold"  
                  :style="{ color: 'var(--ui-primary)' }">Desarrollador Frontend</h3>  
              <p class="text-sm text-(--ui-text-muted)">Empresa XYZ • 2020 - Presente</p>  
              <p class="mt-2">  
                Desarrollo de aplicaciones web utilizando Vue.js, Nuxt y otras tecnologías modernas.  
                Implementación de diseños responsivos y optimización de rendimiento.  
              </p>  
            </div>  
              
            <div class="transition-all duration-500 hover:transform hover:translateY(-2px) p-4 rounded-md"  
                 :style="{ backgroundColor: 'var(--ui-bg)', boxShadow: '0 2px 10px rgba(var(--ui-primary-rgb), 0.05)' }">  
              <h3 class="text-xl font-semibold"  
                  :style="{ color: 'var(--ui-primary)' }">Desarrollador Web Junior</h3>  
              <p class="text-sm text-(--ui-text-muted)">Empresa ABC • 2018 - 2020</p>  
              <p class="mt-2">  
                Mantenimiento y desarrollo de sitios web corporativos.  
                Colaboración en proyectos de e-commerce y aplicaciones internas.  
              </p>  
            </div>  
          </div>  
        </section>  
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
}  
  
.UCard:hover {  
  transform: translateY(-5px);  
  box-shadow: 0 8px 30px rgba(var(--ui-primary-rgb), 0.15);  
}  
</style>