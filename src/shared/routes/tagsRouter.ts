import { Router } from "express";

import { ListTagsController } from "../../modules/tags/useCases/litTags/ListTagsController";
import { CreateTagsController } from "../../modules/tags/useCases/tags/CreateTagController";
import Authenticate from "../http/middlewares/Authenticate";
import IsAdmin from "../http/middlewares/IsAdmin";

export const tagsRouter = Router();
const createTagsController = new CreateTagsController();
const listTagsController = new ListTagsController();

tagsRouter.post("/", Authenticate, IsAdmin, createTagsController.handle);
tagsRouter.get("/", listTagsController.handle);
