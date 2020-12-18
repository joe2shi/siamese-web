import axios from 'axios'

const service = axios.create({
  baseURL: 'http://api.joe2shi.com',
  timeout: 10000
})
service.interceptors.request.use(config => {
  config.headers = {
    'Content-Type': 'application/json;charset=UTF-8'
  }
  return config
})

service.interceptors.response.use(response => {
  if (response.data.code === 20000) {
    return response
  } else {
    console.log(response.data.message)
  }
}, error => {
  if (error.code === 'ECONNABORTED') {
    console.log('connect timeout')
  }
})
export default service
