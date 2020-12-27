import Vue from 'vue'
import VueI18n from 'vue-i18n'

import ven from 'vuetify/lib/locale/en'
import vzh from 'vuetify/lib/locale/zh-Hans'

Vue.use(VueI18n)

const messages = {
  en: {
    ...require('../locales/en.json'),
    $vuetify: ven
  },
  zh: {
    ...require('../locales/zh.json'),
    $vuetify: vzh
  }
}
export default new VueI18n({
  locale: 'zh',
  messages
})
