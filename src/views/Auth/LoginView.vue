<template>
  <v-container class="pa-12" rounded>
    <v-card class="mx-auto px-6 py-8" max-width="344">
      <v-form @submit.prevent="onSignIn">
        <v-text-field
          v-model="loginAuth.email"
          :readonly="loading"
          class="mb-2"
          clearable
          :label="$t('inputs.email.label')"
          placeholder="email@email.com"
        />

        <password-input
          v-model="loginAuth.password"
          :labels="{
            label: $t('inputs.password.label'),
            hint: '',
            rules: {
              required: $t('inputs.password.rules.required'),
              min: $t('inputs.password.rules.min')
            }
          }"
          required
        />

        <br />

        <v-btn
          block
          :color="Colors.bloodRed[500]"
          size="large"
          prepend-icon="mdi-account-key"
          :loading="loading"
          type="submit"
        >
          {{ $t('buttons.signin') }}
        </v-btn>
      </v-form>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Colors } from '@/constants/colors'
import { useAuth } from '@/stores/auth'
import { useUser } from '@/stores/user'
import type { Profile } from '@/types/profiles'
import api from '@/utils/api'
import { useI18n } from 'vue-i18n'
import { useToast } from 'vue-toast-notification'
import axios from 'axios'
import { useRouter } from 'vue-router'
import PasswordInput from '@/components/Inputs/PasswordInput/PasswordInput.vue'

const { loginAuth, signIn } = useAuth()
const { updateUser } = useUser()
const toast = useToast()
const { t } = useI18n()
const router = useRouter()

const loading = ref<boolean>(false)

async function onSignIn() {
  try {
    loading.value = true
    const userId = await signIn()

    const userData = await api.get<Profile>(`/profiles/full/${userId}`)

    updateUser({ ...userData.data, id: userId })

    toast.success(
      t('pages.login.success', {
        name: userData.data.socialName
          ? userData.data.socialName.split(' ')[0]
          : userData.data.firstName
      })
    )

    router.push({ name: userData.data.role })
  } catch (error) {
    console.error(error)

    let message = t('genericMessages.errors.generic')

    if (axios.isAxiosError(error)) {
      switch (error.response?.status) {
        case 401:
          message = t('pages.login.errors.invalidCredentials')
          break
        case 400:
          message = error.response?.data.message
          break
        default:
          message = t('genericMessages.errors.generic')
          break
      }
    }

    toast.error(message)
  } finally {
    loading.value = false
  }
}
</script>
