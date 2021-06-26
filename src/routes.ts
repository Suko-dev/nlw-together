import { Router } from "express";

import { AuthUserController } from "./controller/AuthUserController";
import { CreateComplimentController } from "./controller/CreateComplimentController";
import { CreateTagsController } from "./controller/CreateTagController";
import { CreateUserController } from "./controller/CreateUserController";
import { ListRecieverComplimentsController } from "./controller/ListRecieverComplimentsController";
import { ListSenderComplimentsController } from "./controller/ListSenderComplimentsController";
import { ListTagsController } from "./controller/ListTagsController";
import { ListUsersController } from "./controller/ListUsersController";
import Authenticate from "./middlewares/Authenticate";
import IsAdmin from "./middlewares/IsAdmin";

export const router = Router();

const createUserController = new CreateUserController();
const authUserController = new AuthUserController();
const listUsersController = new ListUsersController();

const createTagsController = new CreateTagsController();
const listTagsController = new ListTagsController();
const createComplimentController = new CreateComplimentController();
const listRecieverComplimentController =
    new ListRecieverComplimentsController();
const listSenderComplimentController = new ListSenderComplimentsController();

router.post("/users", createUserController.handle);
router.post("/login", authUserController.handle);
router.get("/users", Authenticate, listUsersController.handle);

router.post("/tags", Authenticate, IsAdmin, createTagsController.handle);
router.get("/tags", listTagsController.handle);

router.post(
    "/compliments/:recieverId",
    Authenticate,
    createComplimentController.handle
);
router.get(
    "/compliments/sent",
    Authenticate,
    listSenderComplimentController.handle
);
router.get(
    "/compliments/recieved",
    Authenticate,
    listRecieverComplimentController.handle
);
