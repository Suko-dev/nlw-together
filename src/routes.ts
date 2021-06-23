import { Router } from "express";

import { CreateTagsController } from "./controller/CreateTagController";
import { CreateUserController } from "./controller/CreateUserController";
import isAdmin from "./middlewares/isAdmin";

export const router = Router();

const createUserController = new CreateUserController();
const createTagsController = new CreateTagsController();

router.post("/users", createUserController.handle);
router.post("/tags", isAdmin, createTagsController.handle);
