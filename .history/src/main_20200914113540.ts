import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

const app = createApp(App)
app.use(store)
Vue.use(ElementUI);
app.use(Antd)
app.use(router)
app.mount('#app')
