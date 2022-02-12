import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: {
      id: 0,
      title: "Home"
    }
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('../views/Projects.vue'),
    meta: {
      id: 1
    }
  },
  {
    path: '/project/:id',
    name: 'Project',
    component: () => import('../views/Project.vue'),
    meta: {
      id: 1
    }
  },
  {
    path: '/:pathMatch(.*)*', component: () => import('../views/404.vue'),
    meta: {
      id: 99
    }
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
