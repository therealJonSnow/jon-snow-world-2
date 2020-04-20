require('dotenv').config()

export default {
  mode: 'universal',

  generate: {
    fallback: true
  },

  debug: true,
  /*
  ** Headers of the page
  */
  head: {
    title: 'Jonny Snow',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'google-site-verification', content: 'iQp0mxpdcc4y0iOiYjFbZ8haHarriLOQWvtE0QhLsBc' },
      { hid: 'description', name: 'description', content: 'Hi I\'m Jonny Snow, a front end web developer currently based in Hampshire looking to help those in need of a website with flare.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Oxygen:300,400,700|Poiret+One&display=swap' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: false,
  // { color: '#FFCE80', height: '3px', throttle: 0 }
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/global'
  ],

  serverMiddleware: [
    '~/api/contact'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Simple usage
    '@nuxtjs/dotenv'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/apollo',
    '@nuxtjs/style-resources',
    ['nuxt-fontawesome', {
      component: 'fa',
      imports: [
        // import whole set
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['faPlus', 'faMinus']
        },
        {
          set: '@fortawesome/free-brands-svg-icons',
          icons: ['faInstagram', 'faDribbble', 'faLinkedin']
        }
      ]
    }]
  ],

  styleResources: {
    // your settings here
    scss: [
      '~/assets/scss/*.scss'
    ]
  },

  pageTransition: {
    name: 'page',
    mode: 'out-in'
  },

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: process.env.GRAPHQL_URL || 'https://jonsnow-backend.herokuapp.com/graphql'
      }
    }
  },

  env: {
    strapiBaseUri: process.env.API_URL || 'https://jonsnow-backend.herokuapp.com/'
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    // vendor: ['matter-js'],
    extend (config, ctx) {
    }
  }
}
