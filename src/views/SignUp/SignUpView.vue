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
import { useToast } from 'vue-toast-notification'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

import UserInfo from '@/components/Forms/User/SignUp/UserInfo/UserInfo.vue'
import ProfileInfo from '@/components/Forms/User/SignUp/ProfileInfo/ProfileInfo.vue'
import AddressInfo from '@/components/Forms/User/SignUp/AddressInfo/AddressInfo.vue'
import type { Profile } from '@/types/profiles'

type CreatedUserApiReturn = {
  token: string
  userId: string
}

const steps = [
  {
    title: 'Conta',
    component: UserInfo
  },
  {
    title: 'Perfil',
    component: ProfileInfo
  },
  {
    title: 'Endereço',
    component: AddressInfo
  }
]

const toast = useToast()
const { t } = useI18n()
const router = useRouter()
const { user, profile, address } = useSignUp()
const { updateUser } = useUser()


async function onFinishSignUp() {
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

    const userData = await api.get<Profile>(`/profiles/full/${createdUser.data.userId}`)

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
