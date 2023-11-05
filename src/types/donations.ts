export type PreDonation = {
  id: string
  doctorName: string
  doctorRegistrationNumber: string
  status: 'starting' | 'in_progress' | 'finished'
  isEligibility: boolean
  performedNecessaryTests: boolean
  testNotes: string
  fullTestLink: string
  type: 'blood' | 'milk'
  approved: boolean
  doctorId: any
  patientId: string
  createdAt: string
  updatedAt: string
}

export enum PreDonationStatus {
  STARTING = 'starting',
  IN_PROGRESS = 'in_progress',
  FINISHED = 'finished',
}