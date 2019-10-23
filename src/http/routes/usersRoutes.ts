import * as usersController from "../controllers/usersController";
import { checkJwt } from "../middleware/jwt";
import { checkRole } from "../middleware/role";

export default [
  {
    path: "/api/v1/users",
    method: "get",
    handler: [checkJwt, checkRole(["USER"]), usersController.getUsers]
  }
];
