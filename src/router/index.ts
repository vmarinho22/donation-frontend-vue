import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import doctorRoutes from './doctor'
import adminRoutes from './admin'
import patientRoutes from './patient'

export const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/auth/login',
    name: 'login',
    component: () => import('../views/Auth/LoginView.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../views/SignUp/SignUpView.vue')
  },
  patientRoutes,
  adminRoutes,
  doctorRoutes
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
