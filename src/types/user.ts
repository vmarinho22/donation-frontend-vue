import type { Role } from './roles'

export type ReturnedUserApi = {
  id: string;
    email: string;
    role: Role;
    lastLogin: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
}