import { Request, Response, NextFunction } from "express";
import { getRepository } from "typeorm";

import { User } from "../entities/User";
import { HTTP401Error } from "../../utils/httpErrors";

// TODO: handle error using middleware

export const checkRole = (roles: Array<string>) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      // get userId from previous midleware
      const id = res.locals.jwtPayload.userId;
      const userRepository = getRepository(User);
      let user: User;
      user = await userRepository.findOneOrFail(id);
      // check if array of authorized roles includes the user's role
      if (!(roles.indexOf(user.role) > -1)) {
        throw new HTTP401Error("Unauthorized");
      }
      next(); 
      // else {
      //   res.status(401).send("Unauthorized");
      // }
    } catch (error) {
      res.status(401).send(error);
    }
  };
};
