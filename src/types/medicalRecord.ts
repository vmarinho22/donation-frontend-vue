export type MedicalRecord = {
  id: string;
  hasChronicDiseases: boolean;
  chronicDiseases?: string;
  hasMedicalConditions: boolean;
  medicalConditions?: string;
  hasPreviousSurgeries: boolean;
  previousSurgeries?: string;
  hasBloodBorneDiseases: boolean;
  hasCommunicableDiseases: boolean;
  communicableDiseases?: string;
  hasIst: boolean;
  ist?: string;
  useIllicitDrugs: boolean;
  useInjectingDrugs: boolean;
  hasPracticeUnprotectedSex: boolean;
  hadPregnancy: boolean;
  recentlyBreastfed: boolean;
  lastBreastfeeding?: Date;
  notes?: string;
  createdAt: Date | null;
  updatedAt: Date | null;
}