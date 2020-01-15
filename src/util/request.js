import axios from 'axios'

const request = axios.create({
  // baseURL: 'http://localhost:3000/',
  baseURL: 'http://192.168.1.250:18000/',
})

request.interceptors.response.use(response => {
  //response.data = response.data.slice(0, 10)
  return response
})
export default request
