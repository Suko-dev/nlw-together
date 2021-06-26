import { Router } from "express";

import { CreateComplimentController } from "../../modules/comopliments/useCases/createCompliment/CreateComplimentController";
import { ListRecieverComplimentsController } from "../../modules/comopliments/useCases/ListReciever/ListRecieverComplimentsController";
import { ListSenderComplimentsController } from "../../modules/comopliments/useCases/listSender/ListSenderComplimentsController";
import Authenticate from "../http/middlewares/Authenticate";

export const complimentsRouter = Router();

const createComplimentController = new CreateComplimentController();
const listRecieverComplimentController =
    new ListRecieverComplimentsController();
const listSenderComplimentController = new ListSenderComplimentsController();

complimentsRouter.post(
    "/:recieverId",
    Authenticate,
    createComplimentController.handle
);
complimentsRouter.get(
    "/sent",
    Authenticate,
    listSenderComplimentController.handle
);
complimentsRouter.get(
    "/recieved",
    Authenticate,
    listRecieverComplimentController.handle
);
