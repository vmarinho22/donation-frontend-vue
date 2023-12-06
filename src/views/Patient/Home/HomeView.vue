<template>
  <h2>
    {{ $t(patient.id ? 'pages.patient.home.title' : 'pages.patient.register.title') }}
  </h2>
  <p>{{ $t(patient.id ? 'pages.patient.home.subtitle' : 'pages.patient.register.subtitle') }}</p>
  <br />
  <div v-if="patient.id">
    <v-dialog width="800">
      <template v-slot:activator="{ props }">
        <v-btn
          v-bind="props"
          prepend-icon="mdi-plus"
          :color="Colors.bloodRed[500]"
          style="margin-bottom: 16px"
        >
          {{ $t('pages.patient.home.donations.create') }}
        </v-btn>
      </template>
      <template v-slot:default="{ isActive }">
        <v-card :title="$t('pages.patient.home.requestDonation.title')">
          <v-card-text>
            <p style="margin-bottom: 16px">
              {{ $t('pages.patient.home.requestDonation.message') }}
            </p>

            <v-select
              v-model="selectPreDonationRequest"
              :items="selectPreDonationRequestItens"
              item-title="text"
              item-value="type"
              persistent-hint
              return-object
              single-line
            />
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
              :color="Colors.bloodRed[500]"
              @click="isActive.value = false"
            >
              {{ $t('pages.patient.home.requestDonation.close') }}
            </v-btn>
            <v-btn
              :text="$t('pages.patient.home.requestDonation.confirm')"
              @click="
                async () => {
                  await sendPreDonationRequest()
                  isActive.value = false
                }
              "
              :loading="preDonationLoading"
            />
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
    <br />

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
  </div>
  <register-steps v-else />
</template>

<script setup lang="ts">
import { onBeforeMount, ref, watch } from 'vue'
import RegisterSteps from '@/components/Pages/Patient/Register/RegisterSteps.vue'
import { usePatient } from '@/stores/patient'
import api from '@/utils/api'
import type { PreDonation } from '@/types/donations'
import { PreDonationStatus } from '@/types/donations'
import { useRouter } from 'vue-router'
import { Colors } from '@/constants/colors'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
import { useToast } from 'vue-toast-notification'
import axios from 'axios'
import { messageFormatter } from '@/utils/messageFormatter'

const { patient } = usePatient()
const router = useRouter()
const { t } = useI18n()
const toast = useToast()

const donationsRequests = ref<PreDonation[]>([])
const loading = ref(true)
const selectPreDonationRequest = ref<{ text: string; type: string }>({
  text: t('pages.patient.home.requestDonation.type.blood'),
  type: 'blood'
})
const selectPreDonationRequestItens = computed(() => [
  {
    text: t('pages.patient.home.requestDonation.type.blood'),
    type: 'blood'
  },
  {
    text: t('pages.patient.home.requestDonation.type.milk'),
    type: 'milk'
  }
])
const preDonationLoading = ref(false)

onBeforeMount(async () => {
  if(patient.id) {
    await fetchDonationsRequests()
    loading.value = false
  }
})

watch(() => patient.id, async () => {
  if(patient.id) {
    await fetchDonationsRequests()
    loading.value = false
  }
}, { immediate: true })

async function fetchDonationsRequests() {

  const { data } = await api.get<PreDonation[]>(`/donation-pre-ratings/all/by-patient/${patient.id}`)

  donationsRequests.value = data
}

async function sendPreDonationRequest() {
  try {
    preDonationLoading.value = true
    await api.post('/donation-pre-ratings', {
      status: PreDonationStatus.STARTING,
      type: selectPreDonationRequest.value?.type,
      isEligibility: false,
      performedNecessaryTests: false,
      testNotes: '',
      fullTestLink: '',
      approved: false,
      patientId: patient.id,
    })

    await fetchDonationsRequests()

    toast.success(t('pages.patient.home.requestDonation.toast.success'))
  } catch (error) {
    console.error(error)

    let message = ''

    if (axios.isAxiosError(error)) {
      message = messageFormatter.axiosReturn(t, error)
    }

    toast.error(message)
  } finally {
    preDonationLoading.value = false
  }
}
</script>
