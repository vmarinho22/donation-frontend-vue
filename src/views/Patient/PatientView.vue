<template>
  <patient-template>
    <router-view></router-view>
  </patient-template>
</template>

<script setup lang="ts">
import { onBeforeMount } from 'vue'
import PatientTemplate from '@/templates/Logged/Patient/PatientTemplate.vue'
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
