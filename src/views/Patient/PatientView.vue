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
import PatientTemplate from '@/templates/Logged/Patient/PatientTemplate.vue'
import RegisterSteps from '@/components/Pages/Patient/Register/RegisterSteps.vue';
import { usePatient } from '@/stores/patient';

const { patient } = usePatient()
</script>
