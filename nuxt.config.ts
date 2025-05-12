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
          }  
        }  
      }  
    }  
  },  
  // Configuraciones adicionales para producción  
  nitro: {  
    preset: 'vercel'  
  },  
  routeRules: {  
    '/': { prerender: true }  
  },  
  runtimeConfig: {  
    public: {  
      // Variables públicas que puedes necesitar  
    }  
  },  
  sourcemap: false,  
  $production: {  
    // Optimizaciones específicas para producción  
  }  
})