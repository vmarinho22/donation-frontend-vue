<template>
  <h2>{{ $t('pages.admin.nurses.home.title') }}</h2>
  <p>{{ $t('pages.admin.nurses.home.subtitle') }}</p>
  <br />
  <v-table fixed-header height="60vh">
    <thead>
      <tr>
        <th>{{ $t('pages.admin.nurses.home.table.name') }}</th>
        <th>{{ $t('pages.admin.nurses.home.table.email') }}</th>
        <th>{{ $t('pages.admin.nurses.home.table.corenNumber') }}</th>
        <th>{{ $t('pages.admin.nurses.home.table.specialty') }}</th>
        <th>{{ $t('pages.admin.nurses.home.table.disabled') }}</th>
        <th>{{ $t('pages.admin.nurses.home.table.disabledAt') }}</th>
        <th>{{ $t('pages.admin.nurses.home.table.creationDate') }}</th>
        <th>{{ $t('pages.admin.nurses.home.table.actions') }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="nurse in nurses" :key="nurse.id">
        <td>
          {{ nurse.socialName ? nurse.socialName : `${nurse.firstName} ${nurse.lastName}` }}
        </td>
        <td>{{ nurse.email }}</td>
        <td>{{ nurse.coren_number }}</td>
        <td>{{ nurse.specialty }}</td>
        <td>
          {{
            nurse.disabled
              ? $t('pages.admin.actions.disabled.yes')
              : $t('pages.admin.actions.disabled.yes')
          }}
        </td>
        <td>
          {{
            nurse.disabledAt
              ? nurse.disabledAt
              : $t('pages.admin.actions.disabled.notDisabled')
          }}
        </td>
        <td>{{ new Date(nurse.createdAt).toLocaleDateString() }}</td>
      </tr>
    </tbody>
  </v-table>
  <v-btn
    rounded="50%"
    position="absolute"
    icon="mdi-plus"
    style="bottom: 10px; right: 10px"
    :color="Colors.bloodRed[500]"
    @click="goToCreateNurse"
  />
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import api from '@/utils/api'
import { Colors } from '@/constants/colors'
import { useRouter } from 'vue-router'
import type { Nurse } from '@/types/nurse'

const nurses = ref<Nurse[]>([])
const router = useRouter()

onBeforeMount(async () => {
  nurses.value = await api.get<Nurse[]>('/nurses').then((res) => res.data)
})

const goToCreateNurse = () => {
  router.push('/admin/nurses/create')
}
</script>
