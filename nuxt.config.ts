// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/content", "@vueuse/nuxt"],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/katex@0.11.0/dist/katex.min.css",
        },
      ],
    },
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
      theme: {
        default: "github-light",
        dark: "github-dark",
      },
      langs: ["vue"],
    },
    markdown: {
      remarkPlugins: ["remark-math"],
      rehypePlugins: ["rehype-katex"],
    },
  },
});
