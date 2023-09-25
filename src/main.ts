import '@/assets/main.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//@ts-expect-error 配置element-plus国际化
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
//引入自定义插件对象:注册整个项目全局组件
import GlobalView from '@/components/icons/index'


import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(ElementPlus, {
    locale: zhCn,
  })
app.use(GlobalView) //注册全局组件
app.use(createPinia())
app.use(router)

app.mount('#app')


