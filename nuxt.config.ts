// nuxt.config.ts
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2025-01-03',
  devtools: { enabled: false },
  modules: [
    "@nuxt/ui",    // önce @nuxt/ui
    'vuetify-nuxt-module',  // sonra @nuxtjs/tailwindcss
    '@pinia/nuxt', // Pinia'yı ekleyin
  ],
  css: [
    'bootstrap/dist/css/bootstrap.min.css', // Bootstrap CSS'i ekler
    'vuetify/styles', // Vuetify stillerini ekler
  ],
  build: {
    transpile: ['bootstrap','@nuxt/typescript-build'], // JavaScript bileşenleri için
    
  },
  typescript: {
    shim: false, // TypeScript hata ayıklama desteğini açın
  },
  plugins: [
    { src: 'plugins/firebaseAuth.ts', mode: 'client', ssr: false }, // firebaseAuth plugin'ini burada tanımlıyoruz
  ],
})
