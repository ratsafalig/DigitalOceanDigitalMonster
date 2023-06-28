export default defineNuxtConfig({
  ssr: false,
  postcss: {
    plugins: {
      'postcss-nesting': {}
    }
  },
  devtools: {
    enabled: true
  }
})
