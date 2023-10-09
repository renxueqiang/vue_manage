//进行axios二次封装:使用请求与响应拦截器
import axios from 'axios'
import { ElMessage } from 'element-plus'
import useUserStore from '@/stores/user'

const AF = axios.create({
  baseURL: '/api',
  timeout: 5000
})

AF.interceptors.request.use((config) => {
  const userStore = useUserStore()
  if (userStore.state.token) {
    config.headers.token = userStore.state.token
  }
  return config
})

AF.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    let message = ''
    const status = error.response.status
    switch (status) {
      case 401:
        message = 'TOKEN过期'
        break
      case 403:
        message = '无权访问'
        break
      case 404:
        message = '请求地址错误'
        break
      case 500:
        message = '服务器出现问题'
        break
      default:
        message = '网络出现问题'
        break
    }
    //提示错误信息
    ElMessage({
      type: 'error',
      message
    })
    return Promise.reject(error)
  }
)
export default AF
