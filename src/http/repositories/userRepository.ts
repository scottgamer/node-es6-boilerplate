import { User } from "../entities/User";

export const findById = async (id: number) => {
  const user = await User.findOneOrFail(id);
  return user;
};

export const findByUsername = async (username: string) => {
  const user = await User.findOne({ where: { username } });
  return user;
};

export const register = async (userData: User) => {
  const user = new User(userData);
  await user.hashPassword();
  await User.save(user);
};

export const changePassword = async (id: number, password: string) => {
  const user: User = await findById(id);
  user.password = password;
  await user.hashPassword();
  await User.save(user);
};
