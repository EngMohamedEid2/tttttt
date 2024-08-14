export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      api: "https://fakestoreapi.com",
    },
  },

  nitro: {
    preset: "node-server",
    compressPublicAssets: true,
  },
  Server: {
    port: 3000,
  },
  css: ["@/assets/scss/app.scss"],

  components: {
    global: true,
    dirs: ["~/components"],
    loader: true,
  },

  imports: {
    dirs: ["utils", "utils/**", "services/**"],
    autoImport: true,
    presets: [
      {
        from: "vue-i18n",
        imports: ["useI18n"],
      },
    ],
  },
  sourcemap: false,
  ssr: true,

  alias: {
    pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs",
  },

  modules: [
    "nuxt-icon",
    "@nuxt/image-edge",
    "nuxt-swiper",
    "nuxt-rating",
    ["@pinia/nuxt", { autoImports: ["defineStore", "acceptHMRUpdate"] }],
    "@nuxt/image",
    "nuxt-rating",
  ],

  // swiper: {
  //   // Swiper options
  //   //----------------------
  //   // prefix: 'Swiper',
  //   // styleLang: 'css',
  //   modules: ["navigation", "autoplay"], // all modules are imported by default
  // },

  app: {
    // pageTransition: { name: "page", mode: "out-in" },
    // layoutTransition: { name: "layout", mode: "out-in" },
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Russo+One&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Pacifico&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Exo+2:wght@400;500;600;700;800;900&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&amp;display=swap",
        },
      ],
    },
  },

  nitro: {
    compressPublicAssets: true,
  },

  plugins: [{ src: "@/plugins/nonSsrPlugins.js", mode: "client" }],

  image: {
    // The screen sizes predefined by `@nuxt/image`:
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      "2xl": 1536,
    },
  },

  devtools: {
    enabled: true,
  },
});
