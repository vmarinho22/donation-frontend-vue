import { defineStore } from 'pinia'
import { useUser, initialState } from "./user";
import { computed } from 'vue';
import { useDoctor } from './doctor';

export const useAccount = defineStore('account', () => {
  const { user, updateUser } = useUser()
  const { clearDoctorData } = useDoctor()

  const account = computed(() => {
    return {
      user
    }
  })

  function signOff() {
    updateUser(initialState)
    localStorage.removeItem('user')
    localStorage.removeItem('patient')
    localStorage.removeItem('access_token')
    clearDoctorData()
  }

  return { account, signOff }
})