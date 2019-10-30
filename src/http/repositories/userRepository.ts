import { getRepository } from "typeorm";
import { User } from "../entities/User";

export const findById = async (id: number) => {
  const userRepository = getRepository(User);
  const user = await userRepository.findOneOrFail(id);
  return user;
};

export const findByUsername = async (username: string) => {
  const userRepository = getRepository(User);
  const user = await userRepository.findOne({ where: { username } });
  return user;
};

export const register = async (userData: User) => {
  const user = new User(userData);
  await user.hashPassword();
  const userRepository = getRepository(User);
  await userRepository.save(user);
};

export const changePassword = async (id: number, password: string) => {
  const userRepository = getRepository(User);
  const user: User = await findById(id);
  user.password = password;
  await user.hashPassword();
  await userRepository.save(user);
};
