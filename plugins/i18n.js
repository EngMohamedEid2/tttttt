import { createI18n } from 'vue-i18n'
import en from '@/data/languages/en'
import fr from '@/data/languages/fr'

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'en',
    messages: {
      en:en,
      fr:fr
    }
  })
  vueApp.use(i18n)
})