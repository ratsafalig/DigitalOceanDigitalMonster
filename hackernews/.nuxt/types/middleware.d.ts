import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = "feed"
declare module "D:/Users/ratsa/Desktop/DigitalMonster/vue/DigitalOceanDigitalMonster/hackernews/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}