
export interface loginFormData {
    username: string,
    password: string
}

export interface ResponseData{
    code:number,
    message:string,
    ok:boolean
}

export interface loginToken {
    token: string
    message: string
}

//定义登录接口返回数据类型
export interface loginResponseData extends ResponseData{
       data:loginToken
}

//定义获取用户信息返回数据类型
export interface userInfoReponseData extends ResponseData{
    data:{
        routes:string[],
        buttons:string[],
        roles:string[],
        name:string,
        avatar:string
    }
}