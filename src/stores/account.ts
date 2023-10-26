import { defineStore } from 'pinia'
import { useUser, initialState } from "./user";
import { computed } from 'vue';

export const useAccount = defineStore('account', () => {
  const { user, updateUser } = useUser()

  const account = computed(() => {
    return {
      user
    }
  })

  function signOff() {
    updateUser(initialState)
    localStorage.removeItem('user')
    localStorage.removeItem('patient')
  }

  return { account, signOff }
})