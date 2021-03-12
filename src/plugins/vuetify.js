import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import i18n from '../plugins/i18n'
import '../sass/variables.scss'
import '../sass/overrides.sass'

const options = {
  theme: {
    dark: true,
    lang: {
      t: (key, ...params) => i18n.t(key, params)
    },
    themes: {
      light: {
        primary: '#0096c7',
        success: '#3cd1c2',
        warning: '#ffaa2c',
        error: '#f83e70',
        info: '#707070',
        accent: '#f9f9f9',
        secondary: '#f1f3f4',
        anchor: ''
      },
      dark: {
        primary: '#0096c7',
        success: '#3cd1c2',
        warning: '#ffaa2c',
        error: '#f83e70',
        info: '#707070',
        accent: '#212121',
        secondary: '#191919',
        anchor: ''
      }
    }
  }
}

Vue.use(Vuetify)

export default new Vuetify(options)
