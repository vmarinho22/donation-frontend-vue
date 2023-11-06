<template>
  <h2>
    {{ $t(patient.id ? 'pages.patient.home.title' : 'pages.patient.register.title') }}
  </h2>
  <p>{{ $t(patient.id ? 'pages.patient.home.subtitle' : 'pages.patient.register.subtitle') }}</p>
  <br />
  <v-btn
    prepend-icon="mdi-plus"
    :color="Colors.bloodRed[500]"
    style="margin-bottom: 16px;"
    @click="router.push(`/patient/pre-donations/new`)"
  >
    {{ $t('pages.patient.home.donations.create') }}
  </v-btn>
  <div v-if="patient.id">
    <v-progress-circular v-if="loading" indeterminate />
    <div v-else>
      <p v-if="donationsRequests.length === 0">
        {{ $t('pages.patient.home.donations.hasNoPreDonations') }}
      </p>
      <v-table v-else fixed-header height="60vh">
        <thead>
          <tr>
            <th>{{ $t('pages.patient.home.donations.type.title') }}</th>
            <th>{{ $t('pages.patient.home.donations.status.title') }}</th>
            <th>{{ $t('pages.patient.home.donations.table.approval.title') }}</th>
            <th>{{ $t('pages.patient.home.donations.table.createdAt') }}</th>
            <th>{{ $t('pages.patient.home.donations.table.actions') }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="donation in donationsRequests" :key="donation.id">
            <td>{{ $t(`pages.patient.home.donations.type.${donation.type}`) }}</td>
            <td>{{ $t(`pages.patient.home.donations.status.${donation.status}`) }}</td>
            <td>
              {{
                donation.status === PreDonationStatus.FINISHED
                  ? $t(`pages.patient.home.donations.table.approval.${donation.approved}`)
                  : $t(`pages.patient.home.donations.table.approval.review`)
              }}
            </td>
            <td>{{ new Date(donation.createdAt).toLocaleDateString() }}</td>
            <td>
              <v-btn
                variant="text"
                icon="mdi-eye"
                size="small"
                @click="router.push(`/patient/pre-donations/${donation.id}`)"
              />
            </td>
          </tr>
        </tbody>
      </v-table>
    </div>
    <v-btn
      rounded="50%"
      position="absolute"
      icon="mdi-plus"
      style="bottom: 10px; right: 10px"
      :color="Colors.bloodRed[500]"
      @click="router.push(`/patient/pre-donation/new`)"
    />
  </div>
  <register-steps v-else />
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import RegisterSteps from '@/components/Pages/Patient/Register/RegisterSteps.vue'
import { usePatient } from '@/stores/patient'
import api from '@/utils/api'
import type { PreDonation } from '@/types/donations'
import { PreDonationStatus } from '@/types/donations'
import { useRouter } from 'vue-router'
import { Colors } from '@/constants/colors'

const { patient } = usePatient()
const router = useRouter()

const donationsRequests = ref<PreDonation[]>([])
const loading = ref(true)

onBeforeMount(async () => {
  const { data } = await api.get<PreDonation[]>(`/donation-pre-ratings/by-patient/${patient.id}`)

  donationsRequests.value = data
  loading.value = false
})
</script>
