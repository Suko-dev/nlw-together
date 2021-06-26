import { Router } from "express";

import { tagsRouter } from "./tagsRouter";
import { userRouter } from "./userRouter";

export const router = Router();

router.use("/users", userRouter);
router.use("/tags", tagsRouter);
