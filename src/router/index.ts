import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

export const routes =[
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
  {
    path: '/patient',
    name: 'patient',
    component: () => import('../views/Patient/PatientView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
