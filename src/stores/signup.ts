import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Role } from '@/types/roles'

export type UserSignUp = {
  email: string
  password: string
  confirmPassword: string
  cpf: string
  role: Role
}

export type ProfileSignUp = {
  firstName: string
  lastName: string
  socialName: string | null
  photoUrl: string
  phone: string
}

export type AddressSignUp = {
  postalCode: string
  street: string
  number: number | null
  hasNumber: boolean
  complement: string | null
  district: string
  city: string
  state: string
  country: string
  uf: string
}

export type SignUpState = {
  user: UserSignUp
  profile: ProfileSignUp
  address: AddressSignUp
}

const initialUserData = {
  email: '',
  password: '',
  confirmPassword: '',
  cpf: '',
  role: 'patient'
} as UserSignUp

const initialProfileData = {
  firstName: '',
  lastName: '',
  socialName: null,
  photoUrl:
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
  phone: ''
}

const initialAddressData = {
  postalCode: '',
  street: '',
  hasNumber: false,
  number: null,
  complement: null,
  district: '',
  city: '',
  state: '',
  country: '',
  uf: ''
}

export const useSignUp = defineStore('signup', () => {
  const user = ref<UserSignUp>(initialUserData)

  const profile = ref<ProfileSignUp>(initialProfileData)

  const address = ref<AddressSignUp>(initialAddressData)

  function updateUser(key: keyof UserSignUp, value: any) {
    user.value[key] = value
  }

  function updateProfile(key: keyof ProfileSignUp, value: any) {
    profile.value[key] = value
  }

  function updateAddress(key: keyof AddressSignUp, value: any) {
    address.value[key] = value as never
  }

  function clearAllData() {
    user.value = Object.assign(user.value, initialUserData)
    profile.value = Object.assign(profile.value, initialProfileData)
    address.value = Object.assign(address.value, initialAddressData)
  }

  return { user, profile, address, updateUser, updateProfile, updateAddress, clearAllData }
})
