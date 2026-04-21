import type { User } from "./types";

export async function loginApi(
  email: string,
  password: string
): Promise<User> {
  if (email === "admin@test.com") {
    return { email, role: "admin" };
  }

  return { email, role: "user" };
}