<template>
  <v-progress-circular v-if="loading" indeterminate />
  <div v-else>
    <p v-if="donationsRequests.length === 0">
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
        <tr v-for="preDonation in donationsRequests" :key="preDonation.id">
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
                @click="router.push(`/admin/pre-donations/${preDonation.id}`)"
              />
            </td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { PreDonationStatus, type PreDonation } from '@/types/donations';
import { onBeforeMount } from 'vue';
import api from '@/utils/api';
import { Colors } from '@/constants/colors';
import { useRouter } from 'vue-router';

const donationsRequests = ref<PreDonation[]>([])
const loading = ref(true)

const router = useRouter()

onBeforeMount(async () => {
  await fetchDonationsRequests()
  loading.value = false
})

async function fetchDonationsRequests() {

  const { data } = await api.get<PreDonation[]>(`/donation-pre-ratings`)

  donationsRequests.value = data
}
</script>