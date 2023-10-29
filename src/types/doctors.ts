export type Doctor = {
  id: string
  firstName: string
  lastName: string
  email: string
  socialName: string
  specialty: string
  registrationNumber: string
  subspecialties: string | null
  emergencyTelContact: string
  disabled: boolean
  disabledAt: Date | null
  userId: string
  createdAt: Date
  updatedAt: Date
}
