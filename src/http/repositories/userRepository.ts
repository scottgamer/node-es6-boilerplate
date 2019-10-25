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

// TODO: fix spread operator in register to save new user

export const register = async (userData: User)  => {
  let user = new User();
  user.username = userData.username;
  user.password = userData.password;
  user.role = userData.role;

  // user = { ...userData };

  userData.hashPassword();
  const userRepository = getRepository(User);
  await userRepository.save(userData);
};

export const changePassword = async (id: number, password: string) => {
  const userRepository = getRepository(User);
  let user = new User();
  user = await findById(id);
  user.password = password;
  user.hashPassword();
  await userRepository.save(user);
};
