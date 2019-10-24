import { Request, Response, NextFunction } from "express";
import * as usersProcess from "../processes/usersProcess";

export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  const response = await usersProcess.getUsers();
  res.status(200).send(response);
};
