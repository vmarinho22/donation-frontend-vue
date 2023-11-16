<template>
  <linear-stepper :steps="steps" :on-finish="createNurse" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import LinearStepper from '@/components/Steppers/LinearStepper/LinearStepper.vue'
import ProfileInfo from '@/components/Forms/User/SignUp/ProfileInfo/ProfileInfo.vue'
import UserInfo from '@/components/Forms/User/SignUp/UserInfo/UserInfo.vue'
import { generateRandomPassword } from '@/utils/password'
import { useSignUp } from '@/stores/signup'
import api from '@/utils/api'
import { useToast } from 'vue-toast-notification'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import NurseInfo from '@/components/Forms/Nurse/NurseInfo/NurseInfo.vue'

type CreatedUserApiReturn = {
  token: string
  userId: string
}

const nurse = ref<{
  specialty: string
  coren_number: string
  emergencyTelContact: string
}>({
  specialty: '',
  coren_number: '',
  emergencyTelContact: '',
})

const steps = [
  {
    title: 'Dados básicos',
    component: UserInfo,
    props: {
      showPasswordInput: false
    }
  },
  {
    title: 'Perfil',
    component: ProfileInfo
  },
  {
    title: 'Dados profissionais',
    component: NurseInfo,
    props: {
      nurse: nurse.value
    }
  }
]

const { user, profile, clearAllData } = useSignUp()
const toast = useToast()
const { t } = useI18n()
const router = useRouter()

async function createNurse() {
  try {
    const password = generateRandomPassword()

    const userParams = {
      ...user,
      cpf: user.cpf.replace(/\D/g, ''),
      password,
      confirmPassword: password,
      role: 'nurse'
    }

    const createdUser = await api.post<CreatedUserApiReturn>('/signup', {
      user: userParams,
      profile
    })

    await api.post('/nurses', {
      ...nurse.value,
      userId: createdUser.data.userId
    })

    toast.success(t('pages.admin.nurses.create.success', { password: userParams.password }), {
      duration: 10000,
      pauseOnHover: true,
      dismissible: true
    })

    clearAllData()

    router.push('/admin/nurses')

  } catch (error) {
    console.error(error)
    toast.error(t('genericMessages.errors.generic'))
  }
}
</script>
