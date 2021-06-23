import "reflect-metadata";
import express from "express";

import "express-async-errors";
import "./database";
import errorHandler from "./middlewares/errorHandler";
import { router } from "./routes";

const app = express();
app.use(express.json());
app.use(router);

app.use(errorHandler);

app.listen(8080, () => console.log(`Servidor rodando na porta 8080`));
