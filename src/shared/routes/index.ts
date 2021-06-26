import { Router } from "express";

import { complimentsRouter } from "./complimentsRouter";
import { tagsRouter } from "./tagsRouter";
import { userRouter } from "./userRouter";

export const router = Router();

router.use("/users", userRouter);
router.use("/tags", tagsRouter);
router.use("/compliments", complimentsRouter);
