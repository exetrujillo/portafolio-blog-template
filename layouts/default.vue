<!-- layouts/default.vue -->
<template>
  <!-- Contenedor principal con flex-col, altura mínima de pantalla y colores base -->
  <div class="flex flex-col min-h-screen bg-ui-bg text-ui-text">
    <Navbar />
    <!-- El contenido principal ocupa el espacio restante -->
    <main class="flex-grow">
      <!-- UContainer centra el contenido y añade padding horizontal por defecto -->
      <UContainer class="py-4"> <!-- Añadimos padding vertical -->
        <NuxtPage />
      </UContainer>
    </main>
    <Footer />
  </div>
</template>

<!-- Eliminamos la etiqueta <style> ya que usamos clases de Tailwind/Nuxt UI -->
<style>
.layout-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/*.main-content {
  flex: 1;
  padding: 1rem;
}
*/
</style>