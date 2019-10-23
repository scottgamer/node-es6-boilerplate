import Validator from "../../utils/validator";
import { Request, Response, NextFunction } from "express";
import transformValidationErrors from "../transformers/errorTransformer";

export const validateRegister = (req: Request, res: Response, next: NextFunction) => {
  const data = req.body;
  const rules = {
    username: "required|string|min:4|max:50",
    password: "required|string|min:8|max:20",
    role: ["required", { in: ["ADMIN", "USER"] }]
  };

  const validator = new Validator(data, rules);
  if (validator.fails()) {
    const formatedErrors = transformValidationErrors(validator.errors);
    res.status(422).send(formatedErrors);
  } else {
    next();
  }
};
