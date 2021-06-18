import { compare, genSalt, hash } from "bcryptjs";

export async function hashPassword(password) {
  const salt = await genSalt(12);
  const hashPassword = await hash(password, salt);
  return hashPassword;
}

export async function verifyPassword(password, hashedPassword) {
  const isValid = await compare(password, hashedPassword);
  return isValid;
}
