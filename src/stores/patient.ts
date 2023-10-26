import { defineStore } from 'pinia'
import type { Patient } from '@/types/patient'
import { ref } from 'vue'
import type { MedicalRecord } from '@/types/medicalRecord'
import api from '@/utils/api'

type RegisterPatientState = {
  birthDate: Date
  sex: 'man' | 'woman' | 'other'
  gender: string | null
  age: number
  weight: number
  height: number
  rg: string
  bloodId: string
}

export const initialPatientRegisterState: RegisterPatientState = {
  birthDate: new Date(),
  sex: 'man',
  gender: null,
  age: 0,
  weight: 0,
  height: 0,
  rg: '',
  bloodId: ''
}

export const initialPatientState: Patient = {
  id: '',
  ...initialPatientRegisterState,
  userId: '',
  medicalRecordId: '',
  createdAt: new Date(),
  updatedAt: null
}

const initialMedicalRecordRegisterState = {
  hasChronicDiseases: false,
  chronicDiseases: undefined,
  hasMedicalConditions: false,
  medicalConditions: undefined,
  hasPreviousSurgeries: false,
  previousSurgeries: undefined,
  hasBloodBorneDiseases: false,
  hasCommunicableDiseases: false,
  communicableDiseases: undefined,
  hasIst: false,
  ist: undefined,
  useIllicitDrugs: false,
  useInjectingDrugs: false,
  hasPracticeUnprotectedSex: false,
  hadPregnancy: false,
  recentlyBreastfed: false,
  lastBreastfeeding: undefined,
  notes: undefined
}

export const initialMedicalRecordState: MedicalRecord = {
  id: '',
  ...initialMedicalRecordRegisterState,
  createdAt: new Date(),
  updatedAt: null
}

export const usePatient = defineStore(
  'patient',
  () => {
    const patient = ref<Patient>(initialPatientState)
    const registerPatientState = ref<RegisterPatientState>(initialPatientRegisterState)
    const medicalRecord = ref<MedicalRecord>(initialMedicalRecordState)
    const registerMedicalRecord = ref(initialMedicalRecordRegisterState)

    function updatePatient(userPartialData: Partial<Patient>) {
      patient.value = Object.assign(patient.value, userPartialData)
    }

    function updateRegisterState(registerStatePartialData: Partial<RegisterPatientState>) {
      registerPatientState.value = Object.assign(
        registerPatientState.value,
        registerStatePartialData
      )
    }

    function updateMedicalRecord(
      medicalRecordPartialData: Partial<Omit<MedicalRecord, 'id' | 'createdAt' | 'updatedAt'>>
    ) {
      medicalRecord.value = Object.assign(medicalRecord.value, medicalRecordPartialData)
    }

    async function fetchPatientDataByUserId(userId: string) {
      const patientData = await api.get<Patient>(`/patients/by-user/${userId}`).then(res => res.data)

      updatePatient(patientData)
    }

    async function fetchMedicalRecord(id: string) {
      const medicalRecordData = await api
        .get<MedicalRecord>(`/medical-records/${id}`)
        .then(res => res.data)

      updateMedicalRecord(medicalRecordData)
    }

    return {
      patient,
      registerState: registerPatientState,
      medicalRecord,
      registerMedicalRecord,
      updatePatient,
      updateRegisterState,
      updateMedicalRecord,
      fetchPatientDataByUserId,
      fetchMedicalRecord
    }
  },
  {
    persist: true
  }
)
