import { createRouter, createWebHistory } from 'vue-router'
import Profile from '../views/Profile.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    }
  ]
})

export default router