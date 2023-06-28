import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default"
declare module "D:/Users/ratsa/Desktop/DigitalMonster/vue/DigitalOceanDigitalMonster/hackernews/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}