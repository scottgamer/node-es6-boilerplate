import { getRepository } from "typeorm";
import { User } from "../entities/User";
import { HTTP422Error } from "../../utils/httpErrors";

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
  if (await findByUsername(userData.username)) {
    throw new HTTP422Error("Username already exists");
  }

  const user = new User();
  user.username = userData.username;
  user.password = userData.password;
  user.role = userData.role;
  user.hashPassword();
  const userRepository = getRepository(User);
  await userRepository.save(user);
};
