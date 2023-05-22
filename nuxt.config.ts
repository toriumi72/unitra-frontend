// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@vite-pwa/nuxt'
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
  pwa: {
    registerType: "autoUpdate",
    includeAssets: ["favicon.ico"],
    client: {
      installPrompt: true,
    },
    manifest: {
      name: 'Unitra',
      description: "test",
      theme_color: "#ffffff",
      short_name: "Unitra",
      // start_url: "/",
      // display: "standalone",
      // background_color: "#ffffff",
      icons: [
        // {
        //   src: "icons/36x36.png",
        //   sizes: "36x36",
        //   type: "image/png"
        // },
        // {
        //   src: "icons/48x48.png",
        //   sizes: "48x48",
        //   type: "image/png"
        // },
        // {
        //   src: "icons/72x72.png",
        //   sizes: "72x72",
        //   type: "image/png"
        // },
        // {
        //   src: "icons/96x96.png",
        //   sizes: "96x96",
        //   type: "image/png"
        // },
        // {
        //   src: "icons/128x128.png",
        //   sizes: "128x128",
        //   type: "image/png"
        // },
        {
          src: "icons/144x144.png",
          sizes: "144x144",
          type: "image/png"
        },
        // {
        //   src: "icons/152x152.png",
        //   sizes: "152x152",
        //   type: "image/png"
        // },
        // {
        //   src: "icons/192x192.png",
        //   sizes: "192x192",
        //   type: "image/png"
        // },
        // {
        //   src: "icons/256x256.png",
        //   sizes: "256x256",
        //   type: "image/png"
        // },
        // {
        //   src: "icons/384x384.png",
        //   sizes: "384x384",
        //   type: "image/png"
        // },
        // {
        //   src: "icons/512x512.png",
        //   sizes: "512x512",
        //   type: "image/png"
        // }
      ]
    },
    workbox: {
      navigateFallback: "/"
    },
    devOptions: {
      enabled: true,
      type: "module"
    },
  },
})
