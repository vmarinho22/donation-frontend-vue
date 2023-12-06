import { defineStore } from 'pinia'
import { ref } from 'vue'
import api from '@/utils/api'
import type { Doctor } from '@/types/doctors'

export const initialDoctorData: Doctor = {
  id: '',
  firstName: '',
  lastName: '',
  email: '',
  socialName: '',
  specialty: '',
  registrationNumber: '',
  subspecialties: null,
  emergencyTelContact: '',
  disabled: false,
  disabledAt: null,
  userId: '',
  createdAt: new Date(),
  updatedAt: new Date()
}

export const useDoctor = defineStore(
  'doctor',
  () => {
    const doctor = ref<Doctor>(initialDoctorData)

    async function getDoctorByUserId(userId: string) {
      const response = await api.get<Doctor>(`/doctors/by-user/${userId}`)
      return response.data
    }

    async function fetchAndUpdateDoctor(userId: string) {
      const response = await getDoctorByUserId(userId)
      doctor.value = response
    }

    async function clearDoctorData() {
      doctor.value = initialDoctorData
      localStorage.removeItem('doctor')
    }

    function updateDoctor(doctorPartialData: Partial<Doctor>) {
      doctor.value = Object.assign(doctor.value, doctorPartialData)
    }

    return {
      doctor,
      fetchAndUpdateDoctor,
      getDoctorByUserId,
      clearDoctorData,
      updateDoctor
    }
  },
  {
    persist: true
  }
)
