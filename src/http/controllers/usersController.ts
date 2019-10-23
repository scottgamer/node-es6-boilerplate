import { Request, Response, NextFunction } from "express";
import * as jsonPlaceholderProvider from "../services/jsonPlaceholderService";

export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  const response = await jsonPlaceholderProvider.getUsers();
  res.status(200).send(response);
};
