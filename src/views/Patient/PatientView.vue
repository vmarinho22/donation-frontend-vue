<template>
  <patient-template>
    <div v-if="!patient.id">
      <h2>
        {{ $t('pages.patient.register.title') }}
      </h2>
      <p>{{ $t('pages.patient.register.subtitle') }}</p>
      <br>
      <register-steps />
    </div>
  </patient-template>
</template>

<script setup lang="ts">
import { onBeforeMount } from 'vue'
import PatientTemplate from '@/templates/Logged/Patient/PatientTemplate.vue'
import RegisterSteps from '@/components/Pages/Patient/Register/RegisterSteps.vue';
import { usePatient } from '@/stores/patient';
import { useUser } from '@/stores/user';

const { user } = useUser()
const { patient, fetchPatientDataByUserId, fetchMedicalRecord } = usePatient()

onBeforeMount(async () => {
  if (!patient.id) {
    await fetchPatientDataByUserId(user.id)
    await fetchMedicalRecord(patient.medicalRecordId)
  }
})
</script>
