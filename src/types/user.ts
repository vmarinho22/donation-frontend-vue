import type { Role } from './roles'

export type User = {
  id: string
  firstName: string
  lastName: string
  socialName: string | null
  email: string
  cpf: string
  lang: 'pt_br' | 'en_us'
  photoUrl: string
  phone: string
  role: Role
  address: {
    postalCode: string
    street: string
    number: string
    hasNumber: boolean
    district: string
    city: string
    state: string
    country: string
    uf: string
  }
}
