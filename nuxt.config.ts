import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",

  ssr: false,

  devtools: { enabled: true },

  nitro: {
    preset: 'github-pages'
  },

  app: {
  baseURL: '/Express/'
  },

  css: ['./app/assets/css/main.css'],

  modules: [
    '@pinia/nuxt',
  ],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  runtimeConfig: {
    public: {
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseAnon: process.env.SUPABASE_ANON_KEY
    }
  }
});
