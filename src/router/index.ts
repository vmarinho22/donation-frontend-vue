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

const routesWithoutAuth = ['home', 'login', 'signup']

router.beforeEach((to) => {
  const { user } = JSON.parse(localStorage.getItem('user') || '{}')
  const token = localStorage.getItem('access_token')

  const isAuthenticated = Boolean(user?.id && token)

  if (!isAuthenticated && !routesWithoutAuth.includes(to.name as string) && to.name !== 'login') {
    // redirect the user to the login page
    return { name: 'login' }
  }
})

export default router
