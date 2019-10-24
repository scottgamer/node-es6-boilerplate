import { User } from "../entities/User";
import * as userRepository from "../repositories/userRepository";
import { HTTP401Error } from "../../utils/httpErrors";
import * as jwt from "jsonwebtoken";
import config from "../../config/config";

export const register = async (user: User) => {
  await userRepository.register(user);
  return { status: "ok", message: "User has been registered" };
};

export const login = async (username: string, password: string) => {
  const user: User = await userRepository.findByUsername(username);

  // check if password match
  if (!user.checkIfUnencryptedPasswordIsValid(password)) {
    throw new HTTP401Error("Password is incorrect");
  }

  // sign JWT, valid for 1 hour
  const expiresIn = "1h";
  const token = jwt.sign({ userId: user.id, username: user.username }, config.jwtSecret, {
    expiresIn
  });

  return { status: "ok", message: "Successful login", token, expiresIn };
};

export const changePassword = async (res, password: string, newPassword: string) => {
  // get id from JWT
  const id = res.locals.jwtPayload.userId;
  const user: User = await userRepository.findById(id);

  // check if old password matches
  if (!user.checkIfUnencryptedPasswordIsValid(password)) {
    throw new HTTP401Error("Password is incorrect");
  }

  if (password === newPassword) {
    throw new HTTP401Error("New password can't be the same as old password");
  }
  await userRepository.changePassword(id, newPassword);
  return { status: "ok", message: "Password changed successfully" };
};
