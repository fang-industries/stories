export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Fictional Stories - Fang Industries, inc.",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/svg+sml", href: "/icon.svg" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@/assets/css/tailwind.css",
    "@/assets/css/text.css",
    "@/assets/css/transitions.css",
    "@fontsource/open-sans/400.css",
    "@fontsource/open-sans/700.css",
    "@fontsource/raleway/600.css",
    "@fontsource/libre-baskerville/700.css",
    "@fontsource/gfs-neohellenic/400.css",
    "@fontsource/gfs-neohellenic/700.css",
    "@/assets/fontawesome/css/fontawesome.css",
    "@/assets/fontawesome/css/brands.css",
    "@/assets/fontawesome/css/solid.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    "@nuxt/postcss8",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    "@nuxt/content",
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    markdown: {
      prism: {
        theme: "./assets/css/prism.css",
      },
    },
    liveEdit: false,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },

  generate: {
    async routes() {
      const { $content } = require("@nuxt/content");
      const files = await $content({ deep: true }).only(["path"]).fetch();

      return files.map((file) => (file.path === "/index" ? "/" : file.path));
    },
  },

  hooks: {
    "content:file:beforeInsert": (document) => {
      if (document.extension === ".md") {
        const stats = require("reading-time")(document.text);
        document.readingStats = stats;
      }
    },
  },
};
