import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

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
  {
    path: '/patient',
    name: 'patient',
    component: () => import('../views/Patient/PatientView.vue'),
    children: [
      {
        path: '',
        name: 'patient-home',
        component: () => import('../views/Patient/Home/HomeView.vue')
      },
      {
        path: 'pre-donations',
        name: 'patient-pre-donations',
        component: () => import('../views/Patient/PreDonation/PreDonationView.vue'),
        children: [
          {
            path: ':id',
            name: 'patient-pre-donations-home',
            component: () => import('../views/Patient/PreDonation/Details/DetailsView.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/Admin/AdminView.vue'),
    children: [
      {
        path: '',
        name: 'admin-home',
        component: () => import('../views/Admin/Home/HomeView.vue')
      },
      {
        path: 'doctors',
        name: 'admin-doctors',
        component: () => import('../views/Admin/Doctors/DoctorsView.vue'),
        children: [
          {
            path: '',
            name: 'admin-doctors-home',
            component: () => import('../views/Admin/Doctors/Home/HomeView.vue')
          },
          {
            path: 'create',
            name: 'admin-doctors-create',
            component: () => import('../views/Admin/Doctors/Create/CreateView.vue')
          },
        ]
      },
      {
        path: 'nurses',
        name: 'admin-nurses',
        component: () => import('../views/Admin/Nurses/NursesView.vue'),
        children: [
          {
            path: '',
            name: 'admin-nurses-home',
            component: () => import('../views/Admin/Nurses/Home/HomeView.vue')
          },
          {
            path: 'create',
            name: 'admin-nurses-create',
            component: () => import('../views/Admin/Nurses/Create/CreateView.vue')
          },
        ]
      },
      {
        path: 'pre-donations',
        name: 'admin-pre-donations',
        component: () => import('../views/Admin/PreDonation/PreDonationView.vue'),
        children: [
          {
            path: '',
            name: 'admin-pre-donations-home',
            component: () => import('../views/Admin/PreDonation/Home/HomeView.vue'),
          },
          {
            path: ':id',
            name: 'admin-pre-donations-details',
            component: () => import('../views/Admin/PreDonation/Details/DetailsView.vue'),
          }
        ]
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
