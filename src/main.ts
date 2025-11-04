import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue' // .vue 扩展名已显式添加，无需修改
import router from './router/index.js' // 关键：添加显式 .js 扩展名（对应编译后文件）
import 'nprogress/nprogress.css' // 第三方库导入，无需扩展名
import './assets/styles/main.css' // 样式文件导入，无需扩展名

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.mount('#app')