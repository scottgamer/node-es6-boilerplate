import { getRepository } from "typeorm";
import { User } from "../entities/User";

export const findById = async (id: number) => {
  const userRepository = getRepository(User);
  const user = await userRepository.findOneOrFail(id);
  return user;
};



