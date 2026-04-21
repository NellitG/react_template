export type UserRole = "admin" | "user";

export interface User {
  email: string;
  role: UserRole;
}