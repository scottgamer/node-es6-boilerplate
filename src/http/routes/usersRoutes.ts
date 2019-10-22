import * as usersController from "../controllers/usersController";

export default [
  {
    path: "/api/v1/users",
    method: "get",
    handler: [usersController.getUsers]
  }
];
