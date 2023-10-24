export type Patient = {
  id: string;
  birthDate: Date;
  sex: 'man' | 'woman' | 'other';
  gender: string | null;
  age: number;
  weight: number;
  height: number;
  rg: string;
  userId: string;
  medicalRecordId: string;
  bloodId: string;
  createdAt: Date;
  updatedAt: Date | null;
} 