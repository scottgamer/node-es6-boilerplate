import Validator from "../../utils/validator";
import { Request, Response, NextFunction } from "express";
import transformValidationErrors from "../transformers/errorTransformer";

// TODO: check base validator functionality

export const baseValidator = (req: Request, res: Response, next: NextFunction) => {
  const data = {};
  const rules = {};

  const validator = new Validator(data, rules);
  if (validator.fails()) {
    const formatedErrors = transformValidationErrors(validator.errors);
    res.status(422).send(formatedErrors);
  } else {
    next();
  }
};
