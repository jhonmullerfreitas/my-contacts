import { Router } from "express";
import contactCreateController from "../controllers/contacts/contactCreate.controller";
import contactListController from "../controllers/contacts/contactList.controller";

import userCreateController from "../controllers/users/userCreate.controller";
import userListController from "../controllers/users/userList.controller";
import userLoginController from "../controllers/users/userLogin.controller";

const routes = Router();

routes.get("/users", userListController);
routes.post("/users", userCreateController);
routes.post("/users/login", userLoginController);

routes.post("/users/contact", contactCreateController);
routes.get("/users/contact", contactListController)

export default routes;