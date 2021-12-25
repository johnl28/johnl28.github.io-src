import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },

  {
    path: '/:pathMatch(.*)*', component: () => import('../views/404.vue')
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
