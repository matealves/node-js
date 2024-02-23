import express, { Request, Response } from "express";
import path from "path";
import mustache from "mustache-express";
import dotenv from "dotenv";
import { mongoDBConnect } from "./database/mongoDB";
import mainRoutes from "./routes/index";

dotenv.config();

console.log("Conectando ao MongoDB...");
mongoDBConnect();

const server = express();
const PORT = process.env.PORT;

server.set("view engine", "mustache");
server.set("views", path.join(__dirname, "views"));
server.engine("mustache", mustache());

server.use(express.static(path.join(__dirname, "../public")));

server.use(express.urlencoded({ extended: true }));

server.use(mainRoutes);

server.use((req: Request, res: Response) => {
  res.status(404).send("Página não encontrada!");
});

server.listen(PORT, () => {
  console.log(`\x1b[36m[PORT:${PORT}] \x1b[32mApp Express iniciado...\x1b[0m`);
  console.log(
    `\x1b[32mServer local:\x1b[0m \x1b[36mhttp://127.0.0.1:${PORT}\x1b[0m`
  );
});
