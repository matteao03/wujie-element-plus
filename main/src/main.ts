import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import './assets/main.css'
import WujieVue from "wujie-vue3"
const { preloadApp } = WujieVue;

preloadApp({name:'app1', exec:true, url:'http:3001'})
preloadApp({name:'app2', exec:true,url:'http:3002'})
const app = createApp(App)

app.use(router)
app.use(ElementPlus)

app.mount('#app')


app.use(WujieVue)