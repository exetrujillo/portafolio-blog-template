// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: [
    '@nuxt/content',
    '@nuxtjs/color-mode',
    '@nuxt/ui',
    '@nuxt/image'
  ],
  app: {
    head: {
      title: 'Exequiel Trujillo', // Título por defecto para la página de inicio
      titleTemplate: '%s | Exequiel Trujillo', // Plantilla para los títulos de otras páginas
      htmlAttrs: {
        lang: 'es' // Define el idioma principal de tu sitio
      },
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }
      ]
    }
  },
  css: ['~/assets/css/main.css'],
  ui: {
    colorMode: false
  },
  colorMode:{
    classSuffix: ''
  },
  content:{
    build: {
      markdown: {
        highlight: {
          theme: {
            default: 'material-theme-lighter',
            dark: 'vitesse-dark',
          },
          langs: [  
            // Puedes mantener los lenguajes predeterminados
            'json', 'js', 'ts', 'html', 'css', 'vue', 'shell', 'mdc', 'md', 'yaml',
            // Y añadir 'r'
            'r'
          ]  
        }
      }
    }
  },
  image: {
    quality: 60,
    format: ['webp', 'avif']
  },
  // Configuraciones adicionales para producción
  nitro: {
    preset: 'vercel'
  },
  sourcemap: false
})
