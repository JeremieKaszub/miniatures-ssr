import Vue from 'vue'
import Vuei18n from 'vue-i18n'
import fr from '~/config/messages/fr.json'
import en from '~/config/messages/en.json'

Vue.use(Vuei18n)

export default ({ app }) => {
  app.i18n = new Vuei18n({
    locale: 'fr',
    fallbackLocale: 'fr',
    messages: {
      fr,
      en
    },
    silentTranslationWarn: process.env.NODE_ENV === 'production'
  })
}
