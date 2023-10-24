<template>
  <v-container fluid>
    <linear-stepper :steps="steps" :on-finish="onFinishSignUp" />
  </v-container>
</template>

<script setup lang="ts">
import LinearStepper from '@/components/Steppers/LinearStepper/LinearStepper.vue'
import StepOne from './StepOne.vue';
import StepTwo from './StepTwo.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n()

const steps = [
  {
    title: t('pages.patient.register.stepOne'),
    component: StepOne
  },
  {
    title: t('pages.patient.register.stepTwo'),
    component: StepTwo
  }
]

async function onFinishSignUp() {
  console.log('finish')
}

</script>