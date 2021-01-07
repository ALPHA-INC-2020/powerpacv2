import i18n from './config/18ln.js'
export default {
  loadingIndicator: {
    name: 'circle',
    color: '#3B8070',
    background: 'white'
  },
  mode: 'universal',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s PowerPac Myanmar',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ],
    script: [
      {
        src: 'https://unpkg.com/ionicons/dist/ionicons.js',
        body: true
      }
    ]
  },
  generate: {
    fallback: true,
    minify: {
      collapseWhitespace: false
    }
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/css/reset.css', 'aos/dist/aos.css', 'ant-design-vue/dist/antd.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    {
      src: '~/plugins/vue-carousel',
      mode: 'client'
    },
    {
      src: '@/plugins/aos.js',
      mode: 'client'
    },
    {
      src: '@/plugins/antd.js',
      mode: 'client'
    },
    {
      src: '@/plugins/vue2-filters.js',
      mode: 'client'
    },
    {
      src: '@/plugins/social-share.js',
      mode: 'client'
    },
    {
      src: '@/plugins/vue-fb-customer-chat.js',
      mode: 'client'
    },
    {
      src: '@/plugins/vue-noti.js',
      mode: 'client'
    },
    {
      src: '@/plugins/BootstrapVueSkeleton',
      mode: 'client'
    },
    {
      src: '@/plugins/vue-tel-input.js',
      mode: 'client'
    }
  ],

  // Auto import compone  nts (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: ['@nuxtjs/google-analytics', '@aceforth/nuxt-optimized-images'],

  optimizedImages: {
    inlineImageLimit: 1000,
    imagesName: ({ isDev }) =>
      isDev
        ? '[path][name][hash:optimized].[ext]'
        : 'img/[contenthash:7].[ext]',
    responsiveImagesName: ({ isDev }) =>
      isDev
        ? '[path][name]--[width][hash:optimized].[ext]'
        : 'img/[contenthash:7]-[width].[ext]',
    handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
    optimizeImages: true,
    optimizeImagesInDev: false,
    defaultImageLoader: 'img-loader',
    mozjpeg: {
      quality: 80
    },
    optipng: {
      optimizationLevel: 3
    },
    pngquant: false,
    gifsicle: {
      interlaced: true,
      optimizationLevel: 3
    },
    svgo: {
      // enable/disable svgo plugins here
    },
    webp: {
      preset: 'default',
      quality: 75
    }
  },
  googleAnalytics: {
    id: 'G-NT4MXGYHX6'
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-svg-loader',
    [
      'nuxt-i18n',
      {
        defaultLocale: 'en',
        locales: [
          {
            code: 'en',
            name: 'English'
          },
          {
            code: 'mm',
            name: 'Myanmar'
          }
        ],
        vueI18n: i18n
      }
    ]
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: ['vue-carousel'],
    loaders: {
      less: {
        lessOptions: {
          javascriptEnabled: true
        }
      }
    }
  }
}
