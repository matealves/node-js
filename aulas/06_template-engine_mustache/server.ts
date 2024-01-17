import express, { Request, Response } from "express";
import path from "path";
import mustache from "mustache-express";

import mainRoutes from "./src/routes/index";
import painelRoutes from "./src/routes/painel";

const server = express();
const PORT = 80;

server.set("view engine", "mustache");
server.set("views", path.join(__dirname, "src/views"));
server.engine("mustache", mustache());

// criar rotas para arquivos estáticos
server.use(express.static(path.join(__dirname, "public")));

// server.use(mainRoutes);
// podemos usar prefíxos para cada grupo de rotas
server.use("/", mainRoutes);
server.use("/painel", painelRoutes);

server.use((req: Request, res: Response) => {
  res.status(404).send("404 - Página não encontrada.");
});

// $ npm start
server.listen(PORT, () => {
  // console.log(`\x1b[36mNode.js ${process.version}\x1b[0m`);
  console.log(`\x1b[36m[PORT:${PORT}] \x1b[32mApp Express iniciado...\x1b[0m`);
  console.log(
    `\x1b[32mServer local:\x1b[0m \x1b[36mhttp://localhost:${PORT}\x1b[0m`
  );
});
