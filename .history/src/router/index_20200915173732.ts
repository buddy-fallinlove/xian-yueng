import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import layout from '../views/layout/layout.vue'
import login from '../views/login/login.vue'

const routes: Array<RouteRecordRaw> = [

  {
    path: '',
    name: 'layout',
    component: layout,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home,

    },
    {
        path: '/post',
        name: 'post',
        component: post,

    },
    {
        path: '/hotel',
        name: 'hotel',
        component: hotel,

    },
    {
        path: '/rea',
        name: 'rea',
        component: rea,

    },
    {
        path: '/login',
        name: 'login',
        component: login,

    }

    ]
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
