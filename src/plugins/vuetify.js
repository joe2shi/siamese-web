import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const options = {
  theme: {
    dark: true,
    themes: {
      light: {
        primary: '#1976D2',
        success: '#3cd1c2',
        warning: '#ffaa2c',
        error: '#f83e70',
        info: '#707070',
        accent: '#f9f9f9',
        secondary: '#f1f3f4'
      },
      dark: {
        primary: '#1976D2',
        success: '#3cd1c2',
        warning: '#ffaa2c',
        error: '#f83e70',
        info: '#707070',
        accent: '#212121',
        secondary: '#191919'
      }
    }
  }
}

export default new Vuetify(options)
