import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import layout from '@/views/layout/layout.vue'
import login from '@/views/login/login.vue'
import post from '@/views/post/index.vue'
import hotel from '@/views/hotel/index.vue'
import rea from '@/views/rea/index.vue'
import flights from '@/views/rea/flights.vue'
import detail from '@/views/post/detail.vue'
import order from '@/views/rea/order.vue'
import create from '../views/post/create.vue'

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
        path:'/detail',
        name:'detail',
        component: detail
      },
      {
        path:'/flights',
        name:'flights',
        component:flights
      },
      {
        path:'/order',
        name:'order',
        component:order
      },
      {
        path:'/create',
        name:'create',
        component:create
      }
    ]
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
