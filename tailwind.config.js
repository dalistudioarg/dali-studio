/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta Premium Dali Studio
        'ivory': '#F6F1E8',           // Marfil Editorial (Base principal)
        'sand': '#D9CBB6',            // Beige Arena Suave (Base secundaria)
        'espresso': '#3E2F25',        // Café Espresso Profundo (Texto principal)
        'sage': '#5E6F64',            // Verde Salvia Elegante (Acento refinado)
        'terracotta': '#B8613C',      // Terracota Quemado (CTA Premium)
        'stone': '#8C8A84',           // Gris Piedra (Soporte moderno)
      },
    },
  },
  plugins: [],
}
