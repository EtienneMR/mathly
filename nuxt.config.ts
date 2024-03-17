// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/content", "@vueuse/nuxt"],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  nitro: {
    prerender: {
      autoSubfolderIndex: false,
    },
  },
  ui: {
    icons: "all",
  },
  content: {
    documentDriven: true,
    highlight: {
      theme: "github-dark",
      langs: ["vue"],
    },
  },
});
