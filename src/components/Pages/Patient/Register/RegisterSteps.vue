<template>
  <linear-stepper :steps="steps" :on-finish="onFinishSignUp" />
</template>

<script setup lang="ts">
import { onBeforeMount } from 'vue'
import LinearStepper from '@/components/Steppers/LinearStepper/LinearStepper.vue'
import StepOne from './StepOne.vue'
import StepTwo from './StepTwo.vue'
import { useI18n } from 'vue-i18n'
import { usePatient } from '@/stores/patient'
import api from '@/utils/api'
import type { MedicalRecord } from '@/types/medicalRecord'
import { useUser } from '@/stores/user'
import { useToast } from 'vue-toast-notification'
import axios from 'axios'
import { messageFormatter } from '@/utils/messageFormatter'

const { t } = useI18n()
const { registerMedicalRecord, registerState, updateMedicalRecord, updatePatient } = usePatient()
const { user } = useUser()
const toast = useToast()

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

onBeforeMount(async () => {
  localStorage.removeItem('patient')
})

async function onFinishSignUp() {
  try {
    const createdMedicalRecord = await api
      .post<{
        MedicalRecord: string
      }>('/medical-records', registerMedicalRecord)
      .then((res) => res.data)

    const [createdPatient, medicalRecordResponse] = await Promise.all([
      api.post<{
        patient: string
      }>(`/patients`, {
        ...registerState,
        weight: Number(registerState.weight),
        height: Number(registerState.height),
        rg: registerState.rg.replace(/\D/g, ''),
        medicalRecordId: createdMedicalRecord.MedicalRecord,
        userId: user.id
      }),
      api.get<MedicalRecord>(`/medical-records/${createdMedicalRecord.MedicalRecord}`)
    ])

    updateMedicalRecord(medicalRecordResponse.data)

    updatePatient({
      ...registerState,
      id: createdPatient.data.patient,
      medicalRecordId: createdMedicalRecord.MedicalRecord,
      userId: user.id
    })

    toast.success(t('pages.patient.register.success'))

  } catch (error) {
    console.error(error)

    let message = ''

    if (axios.isAxiosError(error)) {
      message = messageFormatter.axiosReturn(t, error)
    }

    toast.error(message)
  }
}
</script>
