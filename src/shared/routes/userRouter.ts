import { Router } from "express";

import { AuthUserController } from "../../modules/user/useCases/authUser/AuthUserController";
import { CreateUserController } from "../../modules/user/useCases/createUser/CreateUserController";
import { ListUsersController } from "../../modules/user/useCases/listUser/ListUsersController";
import Authenticate from "../http/middlewares/Authenticate";

export const userRouter = Router();
const createUserController = new CreateUserController();
const authUserController = new AuthUserController();
const listUsersController = new ListUsersController();

userRouter.post("/create", createUserController.handle);
userRouter.post("/login", authUserController.handle);
userRouter.get("/", Authenticate, listUsersController.handle);
