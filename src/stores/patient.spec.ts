import { describe, it, expect, beforeEach, vi, type Mock } from 'vitest'

import { setActivePinia, createPinia } from 'pinia'
import { usePatient, initialPatientState } from './patient';
import api from '@/utils/api';

vi.mock('@/utils/api')

describe('Patient Store', () => {
  const userId: string = 'uuid'
  const patientId = 'uuid2'
  const medicalRecordId = 'uuid3'
  
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should have a default state', () => {
    const { patient, registerState, medicalRecord, registerMedicalRecord } = usePatient()

    expect(patient).not.toBeNull()
    expect(registerState).not.toBeNull()
    expect(medicalRecord).not.toBeNull()
    expect(registerMedicalRecord).not.toBeNull()
  });

  it('should update patient state', async () => {
    const { patient, updatePatient } = usePatient()

    updatePatient({ age: 10});

    expect(patient.age).toBe(10)
  })

  it('should update patient register state', async () => {
    const { registerState, updateRegisterState } = usePatient()

    updateRegisterState({ age: 10 });

    expect(registerState.age).toBe(10)
  })

  it('should update patient medical record', async () => {
    const { medicalRecord, updateMedicalRecord } = usePatient()

    updateMedicalRecord({ hadPregnancy: true });

    expect(medicalRecord.hadPregnancy).toBe(true)
  })

  it('should fetch patient data by user id', async () => {

    (api.get as Mock).mockResolvedValueOnce({
      ...initialPatientState,
      id: patientId
    })

    const { fetchPatientDataByUserId } = usePatient()

    await fetchPatientDataByUserId(userId)

    expect(api.get).toHaveBeenCalledWith(`/patients/by-user/${userId}`)
    expect(api.get).toHaveBeenCalledTimes(1)
  })

  it('should fetch medical record data by id', async () => {

    (api.get as Mock).mockResolvedValueOnce({
      ...initialPatientState,
      id: medicalRecordId
    })

    const { fetchMedicalRecord } = usePatient()

    await fetchMedicalRecord(medicalRecordId)

    expect(api.get).toHaveBeenCalledWith(`/medical-records/${medicalRecordId}`)
  })

})