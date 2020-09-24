import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import axios from 'axios'

const app = createApp(App)
app.use(store)
app.use axios
app.use(Antd)
app.use(router)
app.mount('#app')
