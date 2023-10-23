<template>
  <logged-out-header />
  <main class="signup">
    <v-container>
      <h2 class="text-h3">{{ $t('pages.signup.title') }}</h2>
      <linear-stepper :steps="steps" :on-finish="onFinishSignUp" />
    </v-container>
  </main>
</template>

<script setup lang="ts">
import LoggedOutHeader from '@/components/Headers/LoggedOutHeader/LoggedOutHeader.vue'
import LinearStepper from '@/components/Steppers/LinearStepper/LinearStepper.vue'
import { useSignUp } from '@/stores/signup'
import { useUser } from '@/stores/user'
import api from '@/utils/api'
import type { User } from '@/types/user'
import { useToast } from 'vue-toast-notification'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

import StepOne from '@/components/Pages/SignUp/StepOne/StepOne.vue'
import StepTwo from '@/components/Pages/SignUp/StepTwo/StepTwo.vue'
import StepThree from '@/components/Pages/SignUp/StepThree/StepThree.vue'

type CreatedUserApiReturn = {
  token: string
  userId: string
}

const steps = [
  {
    title: 'Conta',
    component: StepOne
  },
  {
    title: 'Perfil',
    component: StepTwo
  },
  {
    title: 'Endereço',
    component: StepThree
  }
]

const toast = useToast()
const { t } = useI18n()
const router = useRouter()
const { user, profile, address } = useSignUp()
const { updateUser } = useUser()


async function onFinishSignUp() {
  console.log({ user, profile, address })
  try {
    const createdUser = await api.post<CreatedUserApiReturn>('/signup', {
      user: {
        ...user,
        cpf: user.cpf.replace(/\D/g, '')
      },
      profile,
      address: {
        ...address,
        postalCode: Number(address.postalCode.replace(/\D/g, '')),
        number: Number(address.number)
      }
    })

    localStorage.setItem('access_token', createdUser.data.token)

    const userData = await api.get<User>(`/profiles/full/${createdUser.data.userId}`)

    updateUser({ ...userData.data, id: createdUser.data.userId })

    toast.success(t('pages.signup.accountCreated'))

    router.push('/patient')
  } catch (error) {
    console.error(error)
    toast.error(t('genericMessages.errors.generic'))
  }
}
</script>

<style lang="scss" src="./SignUpView.scss" scoped />
