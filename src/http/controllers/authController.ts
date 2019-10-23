import { Request, Response, NextFunction } from "express";
import * as authProcess from "../processes/authProcess";
import { User } from "../entities/User";
import { clientError } from "../../utils/ErrorHandler";

export const register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data: User = req.body;
    const response = await authProcess.register(data);
    res.status(200).send(response);
  } catch (error) {
    clientError(error, res, next);
  }
};

export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {username, password} = req.body;
    const response = await authProcess.login(username, password);
    res.status(200).send(response);
  } catch (error) {
    clientError(error, res, next);
  }
};

// TODO: implement change password
export const changePassword = async (req: Request, res: Response, next: NextFunction) => {
  // res.status(200).send(response);
};
