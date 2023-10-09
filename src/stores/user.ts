import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { loginFormData, loginResponseData } from '@/model/userModel'
import AF from '@/utils/request'

const useUserStore = defineStore('User', () => {
  const token = ref<string | null>(localStorage.getItem('token'))
  const userInfo = ref<string | null>(null)
  const userLogin = async (data: loginFormData) => {
    const result: loginResponseData = await AF.post('api/user/login', data)
    if (result.code == 200) {
      token.value = result.data.token
      localStorage.setItem('token', result.data.token)
      return 'ok'
    } else {
      return result.data.message
    }
  }

  const login = async () => {
    return '123'
  }
  const getUser = async () => {
    userInfo.value = '123'
    return '123'
  }
  return {
    token,
    userInfo,
    getUser,
    login,
    userLogin
  }
})
export default useUserStore
