export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'bionluk-clone',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/vuemask.js',
    '@/plugins/icons.js',

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/auth-next',

  ],

  axios: {
    proxy: true,
    host: "localhost",
    prefix: "/api/",
    headers: {
      //optional
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  },
  proxy: {
    "/api/": {
      target: "https://guresirlercekici.com/",
      pathRewrite: { "^/api/": "" },
    },
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build yapalım tabi ama şu repoyu siliyorum önce sıfırdan atıcam bu benim repom pardon bunu silemeyiz
  build: {}, // Bu bizim projemizmi evet bi localde bakalımımı önce tü hocam musairseniz sesli arama yapalım
}
