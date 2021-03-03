import vue from '../main'
import axios from 'axios'
import store from '../store'

const service = axios.create({
  baseURL: 'http://api.joe2shi.com/api',
  timeout: 10000
})

service.interceptors.request.use(config => {
  store.state.loading = true
  return config
})

service.interceptors.response.use(response => {
  store.state.loading = false
  if (response.data.code === 20000) {
    return response
  } else {
    vue.$store.dispatch('showSnackbar', { message: response.data.message, color: 'warning' })
  }
}, error => {
  store.state.loading = false
  if (error.code === undefined) {
    vue.$store.dispatch('showSnackbar', { message: error.message, color: 'error' })
  }
  if (error.code === 'ECONNABORTED') {
    vue.$store.dispatch('showSnackbar', { message: vue.$t('Tip.ConnectTimeout'), color: 'error' })
  }
})

export default service
