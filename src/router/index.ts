import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/defineComponent',
        name: 'defineComponent',
        component: () => import('../views/knowledge/defineComponent/index.vue')
      },
      {
        path: '/vuex',
        name: 'vuex',
        component: () => import('../views/knowledge/vuex/index.vue')
      },
      {
        path: '/interface',
        name: 'interface',
        component: () => import('../views/knowledge/interface/index.vue')
      },
      {
        path: '/computed',
        name: 'computed',
        component: () => import('../views/knowledge/computed/index.vue')
      },
      {
        path: '/watch',
        name: 'watch',
        component: () => import('../views/knowledge/watch/index.vue')
      },
      {
        path: '/link',
        name: 'link',
        component: () => import('../views/knowledge/jump/index.vue')
      },
      {
        path: '/refUnit',
        name: 'refUnit',
        component: () => import('../views/knowledge/refUnit/index.vue')
      },
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
