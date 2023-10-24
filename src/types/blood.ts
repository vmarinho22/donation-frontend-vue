export type Blood = {
  id: string;
  type: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
  createdAt: Date | null;
  updatedAt: Date | null;
}