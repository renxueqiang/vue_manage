//统一管理咱们项目用户相关的接口
import AF from '../request'
import type {
  loginFormData,
  loginResponseData,
  userInfoReponseData,
} from '@/model/userModel'
//项目用户相关的请求地址
enum API {
  login = '/admin/acl/index/login',
  userInfo = '/admin/acl/index/info',
  logout = '/admin/acl/index/logout',
}

//登录接口
export const reqLogin = (data: loginFormData) =>
AF.post<any, loginResponseData>(API.login, data)
//获取用户信息
export const reqUserInfo = () =>
AF.get<any, userInfoReponseData>(API.userInfo)
//退出登录
export const reqLogout = () => AF.post<any, any>(API.logout)
