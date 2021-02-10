import axios from 'axios'
import store from '../store'

const service = axios.create({
  baseURL: 'http://api.joe2shi.com',
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
    console.log(response.data.message)
  }
}, error => {
  store.state.loading = false
  if (error.code === undefined) {
    console.log(error.message)
  }
  if (error.code === 'ECONNABORTED') {
    console.log('Connect Timeout')
  }
})
export default service
