<!-- components/Navbar.vue -->  
<template>  
  <header class="navbar">  
    <div class="flex justify-between items-center max-w-4xl mx-auto px-2 sm:px-3 lg:px-4">
        
      <!-- Logo y Texto -->  
      <NuxtLink to="/" class="logo-container flex-shrink-0">
        <img src="/logo.svg" alt="ExeTrujillo Logo" class="logo-img" />
        <span class="logo-text">ExeTrujillo</span>
      </NuxtLink>  
        
      <!-- Menú de Navegación Horizontal - SOLO visible en pantallas md y superiores -->  
      <div class="hidden md:block flex-1">  
        <UNavigationMenu  
          :items="items"  
          orientation="horizontal"  
          class="text-right nav-menu"  
        />  
      </div>  
        
      <div class="flex items-center">  
        <!-- Botón de Tema -->  
        <ClientOnly>  
          <button @click="$colorMode.preference = $colorMode.preference === 'dark' ? 'light' : 'dark'"  
                  class="theme-toggle flex-shrink-0"  
                  aria-label="Cambiar tema">  
            <span v-if="$colorMode.value === 'dark'">🌙</span>  
            <span v-else>☀️</span>  
          </button>  
          <template #fallback>  
            <div class="theme-toggle flex-shrink-0 size-10"></div>  
          </template>  
        </ClientOnly>  
          
        <!-- Botón de menú móvil - Visible SOLO en pantallas menores a md -->  
        <UButton  
          icon="i-lucide-menu"  
          color="primary"  
          variant="ghost"  
          class="ml-2 md:hidden"  
          aria-label="Menú"  
          @click="isMenuOpen = !isMenuOpen"  
        />  
      </div>  
    </div>  
      
    <!-- Menú móvil desplegable -->  
    <Transition name="slide-down">  
      <div v-if="isMenuOpen" class="mobile-menu md:hidden">  
        <UNavigationMenu  
          :items="items"  
          orientation="vertical"  
          class="w-full nav-menu-mobile"  
        />  
      </div>  
    </Transition>  
  </header>  
</template>
  
<script setup lang="ts">  
import type { NavigationMenuItem } from '@nuxt/ui'  
  
const isMenuOpen = ref(false)  
  
const items: NavigationMenuItem[] = [  
  { label: 'Inicio', to: '/' },  
  { label: 'Portafolio', to: '/portfolio' },  
  { label: 'Blog', to: '/blog' },  
  { label: 'Sobre mí', to: '/about' }  
]  
  
// Cerrar el menú móvil cuando cambia la ruta  
const route = useRoute()  
watch(() => route.path, () => {  
  isMenuOpen.value = false  
})  
</script>  
  
<style scoped>  
.navbar {  
  background-color: var(--ui-bg);  
  color: var(--ui-text);  
  padding: 1rem;  
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);  
  transition: all 0.3s ease;  
  border-bottom: 2px solid var(--ui-border);  
  z-index: 50;  
  position: relative;  
  top: 0;  
}  
  
/* Contenedor del logo y texto */
.logo-container {
  display: flex;
  align-items: center;
  gap: 0.5rem; /* Espacio entre la imagen del logo y el texto */
  text-decoration: none;
  transition: all 0.3s ease;
}

.logo-img {
  height: 4rem; /* Logo más grande (ajusta según necesites, ej: 48px) */
  width: auto;
  display: block;
  transition: all 0.3s ease; /* Para transiciones en hover */
}

.logo-text {
  font-weight: 800;
  font-size: 1.65rem; /* Ajusta el tamaño del texto según necesites */
  color: var(--ui-primary); /* Color del texto del logo */
  letter-spacing: -0.5px;
  transition: color 0.3s ease; /* Para transiciones en hover */
}
  
/* Ajuste responsive para el logo y texto */  
@media (max-width: 640px) {  
  .logo-img {  
    height: 2.25rem; /* Logo un poco más pequeño en móviles (ej: 36px) */
  }
  .logo-text {
    font-size: 1.35rem; /* Texto del logo más pequeño en móviles */
  }
}  
  
.logo-container:hover .logo-img {  
  filter: drop-shadow(0 0 7px rgba(var(--ui-primary-rgb), 0.8));  
  transform: scale(1.05);  
}
.logo-container:hover .logo-text {
  /* Aplicamos el mismo efecto hover que a la imagen */
  filter: drop-shadow(0 0 7px rgba(var(--ui-primary-rgb), 0.8));  
  transform: scale(1.05); 
}
  
/* Menú de navegación horizontal */  
:deep(.nav-menu) {  
  display: flex;  
  justify-content: flex-end;  
  margin: 0 1rem;  
}  
  
/* Menú móvil desplegable */  
.mobile-menu {  
  width: 100%;  
  background-color: var(--ui-bg);  
  border-bottom: 2px solid var(--ui-border);  
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);  
  padding: 0.5rem 0;  
}  
  
:deep(.nav-menu-mobile) {  
  padding: 0.5rem 1rem;  
}  
  
:deep(.nav-menu a), :deep(.nav-menu-mobile a) {  
  transition: all 0.2s ease;  
  position: relative;  
  padding: 0.5rem 1rem;  
  border-radius: 4px;  
  margin: 0 0.25rem;  
  color: var(--ui-text);  
  text-decoration: none;   
  border-bottom: none !important;  
}  
  
/* Ajustes específicos para el menú móvil */  
:deep(.nav-menu-mobile a) {  
  display: block;  
  width: 100%;  
  margin: 0.25rem 0;  
  padding: 0.75rem 1rem;  
}  
  
:deep(.nav-menu a:hover), :deep(.nav-menu-mobile a:hover) {  
  color: var(--ui-primary);  
  background-color: rgba(var(--ui-primary-rgb), 0.1);  
  box-shadow: 0 0 15px rgba(var(--ui-primary-rgb), 0.2);  
}  
  
/* Estilo para el enlace activo */  
:deep(.nav-menu .router-link-active), :deep(.nav-menu-mobile .router-link-active) {  
  color: var(--ui-primary);  
  font-weight: 700;  
}  
  
/* Pseudo-elemento ::after para el subrayado decorativo */  
:deep(.nav-menu a::after), :deep(.nav-menu-mobile a::after) {  
  content: '';  
  position: absolute;  
  width: 0;  
  height: 3px;  
  bottom: -5px;  
  left: 50%;  
  background: linear-gradient(90deg, var(--ui-primary), var(--ui-accent));  
  transition: width 0.3s ease;  
  transform: translateX(-50%);  
  border-radius: 3px;  
}  
  
/* Pseudo-elemento ::after en estado hover */  
:deep(.nav-menu a:hover::after), :deep(.nav-menu-mobile a:hover::after) {  
  width: 80%;  
}  
  
/* Pseudo-elemento ::after en estado activo */  
:deep(.nav-menu .router-link-active::after), :deep(.nav-menu-mobile .router-link-active::after) {  
  width: 90%;  
  background: linear-gradient(90deg, var(--ui-primary), var(--ui-accent), var(--ui-secondary));  
  box-shadow: 0 0 10px rgba(var(--ui-primary-rgb), 0.5);  
}  
  
/* Botón de tema */  
.theme-toggle {  
  background-color: transparent;  
  border: 2px solid var(--ui-border);  
  border-radius: 50%;  
  width: 40px;  
  height: 40px;  
  display: flex;  
  align-items: center;  
  justify-content: center;  
  font-size: 1.2rem;  
  cursor: pointer;  
  transition: all 0.3s ease;  
  position: relative;  
  overflow: hidden;  
  background-color: var(--ui-code-block-bg);  
  color: var(--ui-text);  
}  
  
/* Ajuste responsive para el botón de tema */  
@media (max-width: 640px) {  
  .theme-toggle {  
    width: 36px;  
    height: 36px;  
    font-size: 1rem;  
  }  
}  
  
.theme-toggle:hover {  
  transform: rotate(10deg) scale(1.03);  
  border-color: var(--ui-primary);  
  box-shadow: 0 0 8px rgba(var(--ui-primary-rgb), 0.4);  
  background-color: rgba(var(--ui-primary-rgb), 0.08);  
}  
  
.theme-toggle:hover::before {  
  content: '';  
  position: absolute;  
  top: 0;  
  left: 0;  
  width: 100%;  
  height: 100%;  
  background: radial-gradient(circle, rgba(var(--ui-primary-rgb), 0.2) 0%, transparent 70%);  
  opacity: 1;  
}  
  
.theme-toggle span {  
  position: relative;  
  z-index: 2;  
}  
  
/* Animación para el menú móvil */  
.slide-down-enter-active,  
.slide-down-leave-active {  
  transition: all 0.3s ease;  
}  
  
.slide-down-enter-from,  
.slide-down-leave-to {  
  transform: translateY(-20px);  
  opacity: 0;  
}  
</style>