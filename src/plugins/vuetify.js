import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import i18n from '../plugins/i18n'
import '../sass/variables.scss'
import '../sass/overrides.sass'

Vue.use(Vuetify)

const options = {
  theme: {
    dark: false,
    lang: {
      t: (key, ...params) => i18n.t(key, params)
    },
    themes: {
      light: {
        primary: '#1976D2',
        success: '#3cd1c2',
        warning: '#ffaa2c',
        error: '#f83e70',
        info: '#707070',
        accent: '#f9f9f9',
        secondary: '#f1f3f4',
        anchor: '#8c9eff'
      },
      dark: {
        primary: '#1976D2',
        success: '#3cd1c2',
        warning: '#ffaa2c',
        error: '#f83e70',
        info: '#707070',
        accent: '#212121',
        secondary: '#191919',
        anchor: '#8c9eff'
      }
    }
  }
}

export default new Vuetify(options)
