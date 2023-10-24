import { defineStore } from 'pinia'
import { ref } from 'vue'
import api from '@/utils/api'
import type { SignInResponse } from '@/types/auth'

type Login = {
  email: string
  password: string
}

export const useAuth = defineStore('auth', () => {
  const loginAuth = ref<Login>({
    email: '',
    password: ''
  })

  async function signIn(): Promise<string> {
    const { data } = await api.post<SignInResponse>('/auth/signin', loginAuth.value)

    localStorage.setItem('access_token', data.token)

    return data.userId
  }

  return { loginAuth, signIn }

})
