export default {
  path: '/doctor',
  name: 'doctor',
  component: () => import('../views/Doctor/DoctorView.vue'),
  children: [
    {
      path: 'pre-donations',
      name: 'doctor-pre-donations',
      component: () => import('../views/Doctor/PreDonation/PreDonationView.vue'),
      children: [
        {
          path: '',
          name: 'doctor-pre-donations-home',
          component: () => import('../views/Doctor/PreDonation/Home/HomeView.vue')
        }
      ]
    }
  ]
}