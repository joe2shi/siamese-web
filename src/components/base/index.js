import Vue from 'vue'
import snackbar from './Snackbar.vue'
import vuetify from '../../plugins/vuetify'

const SnackbarConstructor = Vue.extend(snackbar)
function success (message) {
  const insistence = new SnackbarConstructor({ vuetify, data: { message: message, color: '#3cd1c2', snackbar: true } })
  insistence.vm = insistence.$mount()
  document.body.appendChild(insistence.vm.$el)
}
function warning (message) {
  const insistence = new SnackbarConstructor({ vuetify, data: { message: message, color: '#ffaa2c', snackbar: true } })
  insistence.vm = insistence.$mount()
  document.body.appendChild(insistence.vm.$el)
}
function error (message) {
  const insistence = new SnackbarConstructor({ vuetify, data: { message: message, color: '#f83e70', snackbar: true } })
  insistence.vm = insistence.$mount()
  document.body.appendChild(insistence.vm.$el)
}

export default { success, warning, error }
