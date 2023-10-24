<template>
  <patient-template>
    <p>oi</p>
  </patient-template>
</template>

<script setup lang="ts">
import PatientTemplate from '@/templates/Logged/Patient/PatientTemplate.vue'
import { useModal } from 'vue-final-modal'
import SimpleModal from '@/components/Modal/SimpleModal/SimpleModal.vue'
import { useI18n } from 'vue-i18n';
import RegisterSteps from '@/components/Pages/Patient/Register/RegisterSteps.vue';

const { t } = useI18n()

const { open } = useModal({
  component: SimpleModal,
  attrs: {
    title: t('pages.patient.register.modal.title'),
    subtitle: t('pages.patient.register.modal.subtitle'),
  },
  slots: {
    default: RegisterSteps
  }
})

open()
</script>
