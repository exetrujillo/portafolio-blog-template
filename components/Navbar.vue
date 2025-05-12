<!-- components/Navbar.vue -->

<template>
  <header class="navbar">
    <!-- Contenedor principal con ancho máximo y padding responsivo -->
    <div class="flex justify-between items-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Logo -->
      <NuxtLink to="/" class="logo flex-shrink-0" :style="{ color: 'var(--ui-primary)' }">MiLogo</NuxtLink>

      <!-- Menú de Navegación Horizontal -->
      <UNavigationMenu
        :items="items"
        orientation="horizontal"
        class="flex-1 text-right nav-menu"
      />

      <!-- Botón de Tema -->
      <ClientOnly>
        <button @click="$colorMode.preference = $colorMode.preference === 'dark' ? 'light' : 'dark'"
                class="theme-toggle ml-4 flex-shrink-0"
                aria-label="Cambiar tema">
          <span v-if="$colorMode.value === 'dark'">🌙</span>
          <span v-else>☀️</span>
        </button>
        <template #fallback>
          <div class="theme-toggle ml-4 flex-shrink-0 size-10"></div>
        </template>
      </ClientOnly>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { NavigationMenuItem } from '@nuxt/ui'

const items: NavigationMenuItem[] = [
  { label: 'Inicio', to: '/' },
  { label: 'Portafolio', to: '/portfolio' },
  { label: 'Blog', to: '/blog' },
  { label: 'Sobre mí', to: '/about' }
]

// La lógica de @nuxtjs/color-mode se maneja globalmente y a través de $colorMode en el template.
</script>

<style scoped>
/* Estilos generales de la barra de navegación */
.navbar {
  background-color: var(--ui-bg); /* Fondo según tema */
  color: var(--ui-text); /* Color de texto general según tema */
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15); /* Sombra sutil */
  transition: all 0.3s ease; /* Transición para cambio de tema */
  border-bottom: 2px solid var(--ui-border); /* Borde inferior según tema */
  z-index: 50; /* Asegurar que la navbar esté sobre el contenido */
  /* position: sticky; /* Hacer la navbar pegajosa en la parte superior */
  top: 0; /* Pegar en la parte superior */
}

/* Estilos para el Logo */
.logo {
  font-weight: 800;
  font-size: 1.75rem;
  /* color se aplica inline ahora */
  text-decoration: none;
  transition: all 0.3s ease;
  letter-spacing: -0.5px;
  /* flex-shrink: 0; se aplica inline */
}

/* Efecto hover para el logo */
.logo:hover {
  /* Asegúrate de que --ui-primary-rgb esté definido en main.css */
  filter: drop-shadow(0 0 5px rgba(var(--ui-primary-rgb), 0.7));
  transform: scale(1.03); /* Escala ligeramente en hover */
}


/* Estilos para UNavigationMenu y sus enlaces (Menú Horizontal) */
:deep(.nav-menu) {
  display: flex;
  justify-content: flex-end;
  /* Añadir margen/relleno para dar espacio alrededor de los elementos del menú */
  margin: 0 1rem;
}

/* Estilo base para cada enlace de navegación */
:deep(.nav-menu a) {
  transition: all 0.2s ease; /* Transición ligeramente más rápida para links */
  position: relative;
  padding: 0.5rem 1rem; /* Relleno interno de cada enlace/botón */
  border-radius: 4px; /* Esquinas redondeadas */
  margin: 0 0.25rem; /* Pequeño margen entre enlaces */
  color: var(--ui-text); /* Color de texto por defecto según tema */
  text-decoration: none; /* Quitar subrayado predeterminado */
  /* Asegurar que el borde inferior de prose no afecte */
  border-bottom: none !important;
}

/* Efecto hover para enlaces de navegación */
:deep(.nav-menu a:hover) {
  color: var(--ui-primary); /* Color primario en hover */
  background-color: rgba(var(--ui-primary-rgb), 0.1); /* Fondo sutil en hover */
  box-shadow: 0 0 15px rgba(var(--ui-primary-rgb), 0.2); /* Sombra sutil en hover */
}

/* Estilo para el enlace activo (resaltar la página actual) */
:deep(.nav-menu .router-link-active) {
  color: var(--ui-primary);
  font-weight: 700;
}

/* Pseudo-elemento ::after para el subrayado decorativo */
:deep(.nav-menu a::after) {
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
:deep(.nav-menu a:hover::after) {
  width: 80%;
}

/* Pseudo-elemento ::after en estado activo */
:deep(.nav-menu .router-link-active::after) {
  width: 90%;
   background: linear-gradient(90deg, var(--ui-primary), var(--ui-accent), var(--ui-secondary));
   box-shadow: 0 0 10px rgba(var(--ui-primary-rgb), 0.5);
}


/* Botón de tema - estilos ajustados */
.theme-toggle {
  background-color: transparent;
  border: 2px solid var(--ui-border); /* Borde usando variable */
  border-radius: 50%;
  width: 40px; /* Ancho fijo */
  height: 40px; /* Altura fija */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem; /* Tamaño del emoji/ícono */
  cursor: pointer;
  transition: all 0.3s ease; /* Transición más simple y rápida */
  position: relative;
  overflow: hidden; /* Para el pseudo-elemento */
  /* Añadir colores de fondo y texto por defecto para que se vea bien antes de JS */
  background-color: var(--ui-code-block-bg); /* Fondo sutil */
  color: var(--ui-text); /* Color del texto/emoji */
}

/* Efecto hover para el botón de tema */
.theme-toggle:hover {
  transform: rotate(10deg) scale(1.03); /* Efecto hover más sutil */
  border-color: var(--ui-primary); /* Color primario en hover */
  box-shadow: 0 0 8px rgba(var(--ui-primary-rgb), 0.4); /* Sombra sutil en hover */
  background-color: rgba(var(--ui-primary-rgb), 0.08); /* Fondo sutil en hover */
}

/* Pseudo-elemento para efecto radial en hover */
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
  z-index: 2; /* Asegurar que el emoji esté sobre el pseudo-elemento */
}
</style>