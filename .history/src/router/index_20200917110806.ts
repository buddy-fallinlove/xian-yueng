import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import layout from '@/views/layout/layout.vue'
import login from '@/views/login/login.vue'
import post from '@/views/post/index.vue'
import hotel from '@/views/hotel/index.vue'
import rea from '@/views/rea/index.vue'
import detail from '../views/post/detail.vue'

const routes: Array<RouteRecordRaw> = [

  {
    path: '',
    name: 'layout',
    component: layout,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home
      },
      {
        path: '/post',
        name: 'post',
        component: post,
      },
      {
        path: '/login',
        name: 'login',
        component: login
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
        path:'detail',
        name:'detail',
        component: detail
      }
    ]
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
