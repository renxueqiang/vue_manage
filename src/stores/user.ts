import { defineStore } from 'pinia'
import { reactive } from 'vue'
import type { loginFormData, loginResponseData, userInfoReponseData } from '@/model/userModel'
import { reqLogin, reqLogout, reqUserInfo } from '@/utils/api/api'

const useUserStore = defineStore('User', () => {
  const state = reactive({
    token: localStorage.getItem('token'),
    username: '',
    avatar: '',
    buttons: ['']
  })

  const userLogin = async (data: loginFormData) => {
    const result: loginResponseData = await reqLogin(data)
    if (result.code == 200) {
      state.token = result.data
      localStorage.setItem('token', result.data)
      getUser()
      return 'ok'
    } else {
      return result.message
    }
  }

  const login = async () => {
    return '123'
  }
  const getUser = async () => {
    const result: userInfoReponseData = await reqUserInfo()
    if (result.code == 200) {
      state.username = result.data.name
      state.avatar = result.data.avatar
      state.buttons = result.data.buttons
      console.log('getUser:',result)

      return 'ok'
    } else {
      return Promise.reject(new Error(result.message))
    }
  }

  const logout = async () => {
    const result: any = await reqLogout()
      if (result.code == 200) {
        state.token = ''
        state.username = ''
        state.avatar = ''
        localStorage.removeItem('token')
        return 'ok'
      } else {
        return Promise.reject(new Error(result.message))
      }
  }
  return {
    state,
    getUser,
    login,
    logout,
    userLogin
  }
})
export default useUserStore
