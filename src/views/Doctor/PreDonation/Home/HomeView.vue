<template>
  <v-progress-circular v-if="loading" indeterminate />
  <div v-else>
    <p v-if="preDonations.length === 0">
      {{ $t('pages.admin.preDonation.hasNoPreDonations') }}
    </p>
    <v-table v-else fixed-header height="60vh">
      <thead>
          <tr>
            <th></th>
            <th>{{ $t('pages.admin.preDonation.table.id') }}</th>
            <th>{{ $t('pages.patient.home.donations.type.title') }}</th>
            <th>{{ $t('pages.patient.home.donations.status.title') }}</th>
            <th>{{ $t('pages.patient.home.donations.table.approval.title') }}</th>
            <th>{{ $t('pages.patient.home.donations.table.createdAt') }}</th>
            <th>{{ $t('pages.patient.home.donations.table.actions') }}</th>
          </tr>
      </thead>
      <tbody>
        <tr v-for="preDonation in preDonations" :key="preDonation.id">
          <td>
            <v-chip :color="Colors.bloodRed[500]" v-if="!preDonation.doctorId && !preDonation.doctorName" label>
              {{ $t('pages.admin.preDonation.table.needsAttention') }}
            </v-chip>
          </td>
          <td>{{ preDonation.id }}</td>
          <td>{{ $t(`pages.patient.home.donations.type.${preDonation.type}`) }}</td>
          <td>{{ $t(`pages.patient.home.donations.status.${preDonation.status}`) }}</td>
          <td>
              {{
                preDonation.status === PreDonationStatus.FINISHED
                  ? $t(`pages.patient.home.donations.table.approval.${preDonation.approved}`)
                  : $t(`pages.patient.home.donations.table.approval.review`)
              }}
            </td>
            <td>{{ new Date(preDonation.createdAt).toLocaleDateString() }}</td>
            <td>
              <v-btn
                variant="text"
                icon="mdi-pencil"
                size="small"
              />
            </td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from 'vue'
import { useDoctor } from '@/stores/doctor'
import { PreDonationStatus, type PreDonation } from '@/types/donations'
import api from '@/utils/api'
import { useToast } from 'vue-toast-notification'
import { useI18n } from 'vue-i18n'
import { Colors } from '@/constants/colors'

const preDonations = ref<PreDonation[]>([])
const loading = ref<boolean>(true)
const { doctor } = useDoctor()
const toast = useToast()
const { t } = useI18n()

onBeforeMount(async () => {
  try {
    const response = await api.get<PreDonation[]>(
      `/donation-pre-ratings/all/by-doctor/${doctor.id}`
    )
    preDonations.value = response.data
    loading.value = false
  } catch (error) {
    console.log(error)
    toast.error(t('genericMessages.errors.loadingContent'))
  }
})
</script>
