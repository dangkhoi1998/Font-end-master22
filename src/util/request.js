import axios from 'axios'

const request = axios.create({
  // baseURL: 'http://localhost:3000/',
  baseURL: 'http://192.168.1.250:17000/',
  //baseURL: 'http://192.168.1.250:18000/',
})

request.interceptors.response.use(response => {
  return response
})
export default request
