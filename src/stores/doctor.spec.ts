import { describe, it, expect, beforeEach, vi, type Mock } from 'vitest'
import { useDoctor } from './doctor'

import { setActivePinia, createPinia } from 'pinia'
import api from '@/utils/api'
import type { Doctor } from '@/types/doctors'

vi.mock('@/utils/api')

const mockedDoctor: Doctor = {
  id: 'b88dcc4b-f7e6-4c60-8ac1-ba62a8d68985',
  firstName: 'test',
  lastName: 'test',
  email: 'test@test.com',
  socialName: '',
  specialty: 'test',
  registrationNumber: '123456/SP',
  subspecialties: null,
  emergencyTelContact: '',
  disabled: false,
  disabledAt: null,
  userId: '',
  createdAt: new Date(),
  updatedAt: new Date()
}

describe('Doctor Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    api.get = vi.fn()
  })

  it('should have a default state', () => {
    const { doctor } = useDoctor()

    expect(doctor).not.toBeNull()
    expect(doctor.id).toEqual('')
  })

  it('should update doctor state', async () => {
    const { doctor, updateDoctor } = useDoctor()

    updateDoctor({ firstName: 'John' })

    expect(doctor.firstName).toBe('John')
  })

  it('should fetch doctor data by user id', async () => {
    (api.get as Mock).mockResolvedValueOnce(mockedDoctor)

    const { fetchAndUpdateDoctor } = useDoctor()

    await fetchAndUpdateDoctor(mockedDoctor.userId)

    expect(api.get).toHaveBeenCalledWith(`/doctors/by-user/${mockedDoctor.userId}`)
  })

  it('should clear doctor data', async () => {
    const { clearDoctorData } = useDoctor()

    clearDoctorData()

    expect(clearDoctorData).not.toBeNull()
  })
})
