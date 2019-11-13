import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import config from "../../config/config";

export const checkJwt = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization;
    const jwtPayload: any = jwt.verify(token, config.jwtSecret);
    res.locals.jwtPayload = jwtPayload;

    // token is valid for 1 hour
    // send a new token on every request
    const { userId, username } = jwtPayload;
    const newToken = jwt.sign({ userId, username }, config.jwtSecret, {
      expiresIn: "1h"
    });
    res.setHeader("token", newToken);
    next();
  } catch (error) {
    res
      .status(401)
      .send({ status: "fail", error: "HTTP401Error", mesage: error.message });
  }
};

// TODO: add refresh token functionality
