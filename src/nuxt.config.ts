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
  build: {
    analyze: {
      analyzerMode: 'static'
    }
  },
  devServer: {
    port: 8080
  },
  extensions: [
    '.ts',
    '.vue'
  ]
})
