import axios from 'axios'

const service = axios.create({
  baseURL: 'http://api.joe2shi.com',
  timeout: 30000
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
    console.log(response.data.messages)
  }
}, error => {
  console.log(error)
  return Promise.resolve(error.response)
})
export default service
