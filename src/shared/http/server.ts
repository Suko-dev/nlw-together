import "reflect-metadata";
import express from "express";

import "express-async-errors";
import "../database";
import "../container";

import { router } from "../routes";
import errorHandler from "./middlewares/errorHandler";

export const app = express();
app.use(express.json());
app.use(router);

app.use(errorHandler);
