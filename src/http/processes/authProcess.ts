import { User } from "../entities/User";
import * as userRepository from "../repositories/userRepository";

export const register = async (user: User) => {
  await userRepository.register(user);
  return { status: "ok", message: "User has been registered" };
};
