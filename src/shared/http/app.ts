import { app } from "./server";

const port = process.env.PORT || 8080;
app.listen(8080, () => console.log(`Servidor rodando na porta ${port}`));
