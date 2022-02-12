import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/Recipe',
      name: '',
      component: () => import('../views/Recipe_View.vue')
    },
    {
      path: '/Tik_Tok',
      name: '',
      component: () => import('../views/Tik_tok.vue')
    },
  ]
})

export default router
