<template>
  <footer class="footer">
    <div class="container mx-auto px-4">
      <p class="text-center">© {{ currentYear }} Tu Nombre. Todos los derechos reservados. <span class="separator">|</span> <a href="mailto:tu@correo.com" class="contact-link">Contacto</a></p>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<style scoped>
.footer {
  background-color: var(--ui-bg);
  color: var(--ui-text);
  padding: 0.75rem 0;
  font-size: 0.875rem;
  height: 50px;
  display: flex;
  align-items: center;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.1);
  border-top: 1px solid var(--ui-border);
  transition: all 0.3s ease;
  position: relative;
  z-index: 10;
}

.container {
  width: 100%;
  max-width: 1200px;
}

.separator {
  margin: 0 0.5rem;
  opacity: 0.6;
}

.contact-link {
  position: relative;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  transition: all 0.3s ease;
  color: var(--ui-text);
  text-decoration: none;
  display: inline-block;
}

.contact-link:hover {
  color: var(--ui-primary);
  background-color: rgba(var(--ui-primary-rgb), 0.1);
}

.contact-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 50%;
  background: var(--ui-primary);
  transition: all 0.3s ease;
  transform: translateX(-50%);
  border-radius: 3px;
}

.contact-link:hover::after {
  width: 80%;
  background: linear-gradient(90deg, var(--ui-primary), var(--ui-accent), var(--ui-secondary));
  box-shadow: 0 0 10px rgba(var(--ui-primary-rgb), 0.7), 
              0 0 20px rgba(var(--ui-highlight-rgb), 0.4);
}
</style>
  