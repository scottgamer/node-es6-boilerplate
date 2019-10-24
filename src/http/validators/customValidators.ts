import Validator from "../../utils/validator";
import { findByUsername } from "../repositories/userRepository";

/* ****************************************************************
 * You can register new validators with the following functions:  *
 * Validator.register(name, callbackFn, errorMessage);            *
 * Validator.registerAsync(name, callbackFn, errorMessage);       *
 ******************************************************************/

Validator.registerAsync(
  "username_available",
  async (username: string, attribute, req, passes) => {
    if (await findByUsername(username)) {
      passes(false);
    }
    passes();
  },
  "Username is already in use."
);
