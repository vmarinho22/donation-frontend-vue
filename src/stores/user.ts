import { defineStore } from 'pinia'
import type { Profile } from '@/types/profiles'
import { ref } from 'vue'

export const initialState: Profile = {
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
  const user = ref<Profile>(initialState)

  function updateUser(userPartialData: Partial<Profile>) {
    user.value = Object.assign(user.value, userPartialData)
  }

  return { user, updateUser }
}, {
  persist: true
})
