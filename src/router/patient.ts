export default {
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
}