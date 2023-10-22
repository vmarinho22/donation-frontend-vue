import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Role } from '@/types/roles';

export type UserSignUp = {
  email: string;
  password: string;
  confirmPassword: string;
  cpf: string;
  role: Role;
}

export type ProfileSignUp = {
  firstName: string;
  lastName: string;
  socialName: string | null;
  photoUrl: string;
  phone: string;
}

export type AddressSignUp = {
  postalCode: number;
  street: string;
  number: number | null;
  hasNumber: boolean;
  district: string;
  city: string;
  state: string;
  country: string;
  uf: string;
}

export type SignUpState = {
  user: UserSignUp;
  profile: ProfileSignUp;
  address: AddressSignUp;
}

export const useSignUp = defineStore('signup', () => {
  const user = ref<UserSignUp>({
    email: '',
    password: '',
    confirmPassword: '',
    cpf: '',
    role: 'patient',
  })

  const profile = ref<ProfileSignUp>({
    firstName: '',
    lastName: '',
    socialName: null,
    photoUrl: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
    phone: '',
  })

  const address = ref<AddressSignUp>({
    postalCode: 0,
    street: '',
    hasNumber: false,
    number: null,
    district: '',
    city: '',
    state: '',
    country: '',
    uf: '',
  })

  function updateUser(key: keyof UserSignUp, value: any) {
    user.value[key] = value
  }

  function updateProfile(key: keyof ProfileSignUp, value: any) {
    profile.value[key] = value
  }

  function updateAddress(key: keyof AddressSignUp, value: any) {
    address.value[key] = value as never
  }

  return { user, profile, address, updateUser, updateProfile, updateAddress }
})