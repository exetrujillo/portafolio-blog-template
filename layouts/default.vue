<!-- layouts/default.vue -->
<template>
  <!-- Contenedor principal con flex-col, altura mínima de pantalla y colores base -->
  <div class="flex flex-col min-h-screen bg-ui-bg text-ui-text">
    <Navbar />
    <!-- El contenido principal ocupa el espacio restante -->
    <main class="flex-grow">
      <UContainer class="-px-4 sm:-px-6 lg:-px-8"> <!-- Añadimos padding vertical -->
        <NuxtPage />
      </UContainer>
    </main>
    <Footer />
  </div>
</template>

<style>
.layout-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  padding: 1rem;
}

</style>