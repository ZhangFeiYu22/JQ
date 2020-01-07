import axios from 'axios'
import router from '../router/index';

// 实例化 axios
const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 5000,
  headers: {
    'content-type': 'application/json; charset=UTF-8'
  }
})

// 请求拦截器
service.interceptors.request.use(config => {
  if (config.method == 'post') {
    config.data = {
      ...config.data
    }
  } else if (config.method == 'get') {
    config.params = {
      ...config.params
    }
  }
  return config
}, error => {
  Promise.reject(error)
})


export default service
