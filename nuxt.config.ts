// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  runtimeConfig: {
    public: {
      apiKey: "AIzaSyBnAwX_HZI3V7-dJ74FUNTDr_1MRumwPRU",
      authDomain: "unitra-d8b02.firebaseapp.com",
      projectId: "unitra-d8b02",
      storageBucket: "unitra-d8b02.appspot.com",
      messagingSenderId: "549746517751",
      appId: "1:549746517751:web:aba5efcddc475f97dc95f2",
      measurementId: "G-YBSHQKV30H"
    },
  },
  nitro: {
    preset: "firebase",
  },
})
