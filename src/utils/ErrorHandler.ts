import { Response, NextFunction } from "express";
import { HTTPClientError, HTTP401Error, HTTP404Error } from "../utils/httpErrors";

export const notFoundError = () => {
  throw new HTTP404Error("Method not found.");
};

export const unauthorizedError = () => {
  throw new HTTP401Error("Unauthorized.");
};

export const clientError = (err: Error, res: Response, next: NextFunction) => {
  if (err instanceof HTTPClientError) {
    console.warn(err);

    // set err.data for errors coming from services
    res.status(err.statusCode).send({
      status: "fail",
      error: err.name,
      message: err.message,
      data: err.data
    });
  } else {
    next(err);
  }
};

export const serverError = (err: Error, res: Response, next: NextFunction) => {
  console.error(err);
  if (process.env.NODE_ENV === "production") {
    res.status(500).send("Internal Server Error");
  } else {
    res.status(500).send(err.stack);
  }
};
