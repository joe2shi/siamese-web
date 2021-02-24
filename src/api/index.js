import http from './http'

// get
export function getListAPI (url, params) {
  return http.get(url, params)
}

// post
export function postAPI (url, params) {
  return http.post(url, params)
}

// put
export function putAPI (url, params) {
  return http.put(url, params)
}

// delete
export function deleteListAPI (url, params) {
  return http.delete(url, params)
}
