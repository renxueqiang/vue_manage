import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { loginFormData, loginResponseData } from '@/model/userModel'
import AF from '@/utils/request'

const useUserStore = defineStore('User', () => {
  const token = ref<string | null>(localStorage.getItem('token'))

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
  return {
    token,
    userLogin
  }
})
export default useUserStore
