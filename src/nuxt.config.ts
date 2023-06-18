export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        {
          name: 'viewport', content: 'width=device-width, initial-scale=1'
        }
      ],
      noscript: [
        {
          children: 'Please, turn up JavaScript or upgrade your browser'
        }
      ]
    },
    rootId: '__app',
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@use "@/assets/sass/_global.scss" as *; @use "@/assets/sass/_resets.scss" as *; @use "@/node_modules/rfs/scss" as *;'
        }
      }
    }
  },
  build: {
    analyze: {
      analyzerMode: 'static'
    },
  },
  devServer: {
    port: 8080
  },
  extensions: [
    '.ts',
    '.vue'
  ],
  modules: [
    '@nuxtjs/i18n',
  ],
  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    langDir: 'localization',
    locales: [
      {
      code: 'en',
      file: 'en.json'
      },
      {
        code: 'ru',
        file: 'ru.json'
      }],
  }
})
