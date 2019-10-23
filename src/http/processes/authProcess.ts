import { User } from "../entities/User";
import * as userRepository from "../repositories/userRepository";
import { HTTP422Error } from "../../utils/httpErrors";
import * as jwt from "jsonwebtoken";
import config from "../../config/config";

export const register = async (user: User) => {
  await userRepository.register(user);
  return { status: "ok", message: "User has been registered" };
};

// TODO: validate if its possible to handle error in validator

export const login = async (username: string, password: string) => {
  const user: User = await userRepository.findByUsername(username);
  if (!user) {
    throw new HTTP422Error("Username is incorrect");
  }

  // check if encrypted password match
  if (!user.checkIfUnencryptedPasswordIsValid(password)) {
    throw new HTTP422Error("Password is incorrect");
  }

  // sign JWT, valid for 1 hour
  const expiresIn = "1h";
  const token = jwt.sign({ userId: user.id, username: user.username }, config.jwtSecret, {
    expiresIn
  });

  return { status: "ok", message: "Successful login", token, expiresIn };
};
