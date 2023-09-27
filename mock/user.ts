
function userList() {
    return [
        {
            userId: 1,
            avatar:
                'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
            username: '111',
            password: '111',
            desc: '平台管理员',
            roles: ['平台管理员'],
            buttons: ['cuser.detail'],
            routes: ['home'],
            token: 'Admin Token',
        },
        {
            userId: 2,
            avatar:
                'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
            username: 'system',
            password: '111111',
            desc: '系统管理员',
            roles: ['系统管理员'],
            buttons: ['cuser.detail', 'cuser.user'],
            routes: ['home'],
            token: 'System Token',
        },
    ]
}

export default [

    {
        url: '/api/user/login',
        method: 'post',
        response: ({ body }) => {
            const { username, password } = body;
            const checkUser = userList().find(
                (item) => item.username === username && item.password === password,
            )

            if (!checkUser) {
                return { code: 201, data: { message: '账号或者密码不正确' } }
            }
            const { token } = checkUser
            return { code: 200, data: { token } }
        },
    },

    {
        url: '/api/user/info',
        method: 'get',
        response: (request) => {

            const token = request.headers.token;
            //查看用户信息是否包含有次token用户
            const checkUser = userList().find((item) => item.token === token)
            //没有返回失败的信息
            if (!checkUser) {
                return { code: 201, data: { message: '获取用户信息失败' } }
            }

            return { code: 200, data: { user: checkUser} }
        },
    },
]