import { Router } from "express";

import { AuthUserController } from "./controller/AuthUserController";
import { CreateComplimentController } from "./controller/CreateComplimentController";
import { CreateTagsController } from "./controller/CreateTagController";
import { CreateUserController } from "./controller/CreateUserController";
import Authenticate from "./middlewares/Authenticate";

export const router = Router();

const createUserController = new CreateUserController();
const authUserController = new AuthUserController();
const createTagsController = new CreateTagsController();
const createComplimentController = new CreateComplimentController();

router.post("/users", createUserController.handle);
router.post("/tags", Authenticate, createTagsController.handle);
router.post("/login", authUserController.handle);
router.post("/compliments", Authenticate, createComplimentController.handle);
