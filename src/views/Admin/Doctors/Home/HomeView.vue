<template>
  <h2>{{ $t('pages.admin.doctors.home.title') }}</h2>
  <p>{{ $t('pages.admin.doctors.home.subtitle') }}</p>
  <br />
  <div v-if="loading">
    <v-progress-circular indeterminate />
  </div>
  <v-table fixed-header height="60vh">
    <thead>
      <tr>
        <th>{{ $t('pages.admin.doctors.home.table.name') }}</th>
        <th>{{ $t('pages.admin.doctors.home.table.email') }}</th>
        <th>{{ $t('pages.admin.doctors.home.table.registrationNumber') }}</th>
        <th>{{ $t('pages.admin.doctors.home.table.specialty') }}</th>
        <th>{{ $t('pages.admin.doctors.home.table.disabled') }}</th>
        <th>{{ $t('pages.admin.doctors.home.table.disabledAt') }}</th>
        <th>{{ $t('pages.admin.doctors.home.table.creationDate') }}</th>
        <th>{{ $t('pages.admin.doctors.home.table.actions') }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="doctor in doctors" :key="doctor.id">
        <td>
          {{ doctor.socialName ? doctor.socialName : `${doctor.firstName} ${doctor.lastName}` }}
        </td>
        <td>{{ doctor.email }}</td>
        <td>{{ doctor.registrationNumber }}</td>
        <td>{{ doctor.specialty }}</td>
        <td>
          {{
            doctor.disabled
              ? $t('pages.admin.actions.disabled.yes')
              : $t('pages.admin.actions.disabled.yes')
          }}
        </td>
        <td>
          {{
            doctor.disabledAt
              ? doctor.disabledAt
              : $t('pages.admin.actions.disabled.notDisabled')
          }}
        </td>
        <td>{{ new Date(doctor.createdAt).toLocaleDateString() }}</td>
      </tr>
    </tbody>
  </v-table>
  <v-btn
    rounded="50%"
    position="absolute"
    icon="mdi-plus"
    style="bottom: 10px; right: 10px"
    :color="Colors.bloodRed[500]"
    @click="goToCreateDoctor"
  />
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import api from '@/utils/api'
import type { Doctor } from '@/types/doctors'
import { Colors } from '@/constants/colors'
import { useRouter } from 'vue-router'

const doctors = ref<Doctor[]>([])
const router = useRouter()

const loading = ref<boolean>(true)

onBeforeMount(async () => {
  doctors.value = await api.get<Doctor[]>('/doctors').then((res) => res.data)
  loading.value = false
})

const goToCreateDoctor = () => {
  router.push('/admin/doctors/create')
}
</script>
