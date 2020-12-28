import Vue from 'vue'
import snackbar from './Snackbar.vue'
import vuetify from '../../plugins/vuetify'

const SnackbarConstructor = Vue.extend(snackbar)
function success (message, type) {
  const instence = new SnackbarConstructor({ vuetify, data: { message: message, color: '#3cd1c2', snackbar: true } })
  instence.vm = instence.$mount()
  document.body.appendChild(instence.vm.$el)
}
function warning (message, type) {
  const instence = new SnackbarConstructor({ vuetify, data: { message: message, color: '#ffaa2c', snackbar: true } })
  instence.vm = instence.$mount()
  document.body.appendChild(instence.vm.$el)
}
function error (message, type) {
  const instence = new SnackbarConstructor({ vuetify, data: { message: message, color: '#f83e70', snackbar: true } })
  instence.vm = instence.$mount()
  document.body.appendChild(instence.vm.$el)
}

export default { success, warning, error }
