import type { User } from '@/types/user'

const mockedUser = {
  id: '1',
  firstName: 'John',
  lastName: 'Doe',
  email: 'email@email.com',
  cpf: '00000000000',
  lang: 'pt_br',
  socialName: null,
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
  },
  photoUrl: '',
  role: 'patient'
} as User

export default mockedUser
