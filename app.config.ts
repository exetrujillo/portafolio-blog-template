export default defineAppConfig({
  ui: {
    // Define qué colores de tu tema usará Nuxt UI por defecto.
    // Estos nombres deben coincidir con los nombres de colores de Tailwind/CSS (sin '--').
    primary: 'ui-primary', // Usa la variable --ui-primary definida en main.css
    gray: 'slate'          // Usa la paleta 'slate' de Tailwind para tonos neutros.
    // gray: 'ui-text'     // Alternativa: usa --ui-text como color neutro base.
  }
})