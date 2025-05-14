---
title: Introducción a Nuxt UI
description: Descubre cómo Nuxt UI puede mejorar la experiencia de desarrollo en tus proyectos Nuxt.
date: 2025-05-01
tags: ['UI/UX', 'Nuxt']
image: /blog-images/web-design-1.webp
---

Nuxt UI es una biblioteca de componentes para Nuxt 3 que proporciona una colección de componentes UI totalmente estilizados y personalizables. Basada en Reka UI, Tailwind CSS v4 y Tailwind Variants, Nuxt UI facilita la creación de interfaces de usuario modernas y atractivas sin tener que preocuparte por el diseño desde cero.

## Características principales

- Componentes totalmente estilizados y personalizables
- Integración perfecta con Nuxt 3
- Basado en Tailwind CSS
- Soporte para modo oscuro
- Accesibilidad incorporada

## Instalación

Para comenzar a utilizar Nuxt UI en tu proyecto, simplemente instala el paquete:

```bash
npm install @nuxt/ui
```

Luego, añade el módulo a tu configuración de Nuxt:

```js
// nuxt.config.ts
export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
  ],
  css: ['~/assets/css/main.css']
})
```

## Componentes populares

Nuxt UI ofrece una amplia gama de componentes, desde botones hasta formularios y más. Algunos de los componentes más populares incluyen:

- UButton: Botones estilizados con diferentes variantes y estados
- UCard: Contenedores para mostrar contenido relacionado
- UInput: Campos de entrada con validación y estados
- UAlert: Mensajes de alerta para notificaciones
- UDropdown: Menús desplegables para opciones
- 55+ componentes UI totalmente estilizados y personalizables  
- Integración perfecta con Nuxt 3 y Vue 3  
- Basado en Tailwind CSS v4 con la directiva @theme  
- Construido sobre primitivos de Reka UI para una robusta accesibilidad  
- API de Tailwind Variants para estilos flexibles  
- Soporte completo para TypeScript con autocompletado  
- Soporte para modo oscuro/claro  
- Internacionalización incorporada con soporte RTL/LTR  

## Ejemplo de uso

Aquí un ejemplo sencillo de cómo usar el componente UButton:

```vue
<template>
  <UButton color="primary" @click="showAlert">
    Haz clic en mí
  </UButton>
</template>

<script setup>
const showAlert = () => {
  alert('¡Botón clickeado!')
}
</script>
```

## Personalización de temas

Nuxt UI permite personalizar fácilmente los colores y temas de tu aplicación a través del archivo `app.config.ts`:

```js
// app.config.ts
export default defineAppConfig({
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'zinc'
    }
  }
})
```

Esto te permite mantener una apariencia consistente en toda tu aplicación sin tener que modificar cada componente individualmente.

## Integración con iconos

Nuxt UI se integra perfectamente con iconos a través del módulo `@nuxt/icon`, dando acceso a más de 200,000 iconos personalizables de Iconify. Para usar iconos, simplemente instala las colecciones que necesites:

```bash
npm install -D @iconify-json/lucide
```

Luego puedes usar los iconos directamente en tus componentes:

```vue
<template>
  <UIcon name="i-lucide-lightbulb" class="size-5" />
  <UButton icon="i-lucide-sun" variant="subtle">Botón con icono</UButton>
</template>
```

## Componentes avanzados

Además de los componentes básicos, Nuxt UI ofrece componentes más avanzados para casos de uso específicos:

- **UNavigationMenu**: Para crear menús de navegación complejos
- **UTabs**: Para organizar contenido en pestañas
- **UTable**: Para mostrar datos tabulares con ordenación y filtrado
- **UForm**: Para crear formularios con validación integrada

Estos componentes te permiten crear interfaces más complejas sin tener que implementar la lógica desde cero.

## Conclusión

Nuxt UI es una biblioteca de componentes que acelera significativamente el desarrollo de interfaces de usuario en aplicaciones Nuxt. Con su enfoque en la accesibilidad, personalización y facilidad de uso, te permite crear aplicaciones atractivas y funcionales sin sacrificar la calidad.

Ya sea que estés construyendo un sitio web personal, un blog o una aplicación empresarial compleja, Nuxt UI proporciona las herramientas necesarias para crear interfaces de usuario modernas y accesibles.

Para más información, consulta la [documentación oficial de Nuxt UI](https://ui.nuxt.com/).