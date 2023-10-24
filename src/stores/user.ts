import { defineStore } from 'pinia'
import type { User } from '@/types/user'
import { ref } from 'vue'

export const initialState: User = {
  id: '',
  firstName: '',
  lastName: '',
  socialName: null,
  email: '',
  cpf: '',
  lang: 'pt_br',
  photoUrl: '',
  role: 'patient',
  phone: '',
  address: {
    postalCode: '',
    street: '',
    number: '',
    hasNumber: false,
    district: '',
    city: '',
    state: '',
    country: '',
    uf: ''
  }
}


export const useUser = defineStore('user', () => {
  const user = ref<User>(initialState)

  function updateUser(userPartialData: Partial<User>) {
    user.value = Object.assign(user.value, userPartialData)
  }

  return { user, updateUser }
}, {
  persist: true
})
