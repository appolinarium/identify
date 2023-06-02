export default defineNuxtConfig({
  css: [
        "primevue/resources/themes/lara-light-blue/theme.css",
        "primevue/resources/primevue.css"
    ],
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
    transpile: ["primevue"]
  },
  devServer: {
    port: 8080
  },
  extensions: [
    '.ts',
    '.vue'
  ],
})
