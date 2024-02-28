import express, { Request, Response } from "express";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

const server = express();

server.use(express.static(path.join(__dirname, "public")));
server.use(express.urlencoded({ extended: true }));

server.use((req: Request, res: Response) => {
  res.status(404);
  res.json({ error: "404 - Not Found" });
});

const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log(`[PORT:${PORT}] \x1b[32mServidor iniciado.\x1b[0m`);
  console.log(
    `\x1b[0mRota local:\x1b[0m \x1b[36mhttp://127.0.0.1:${PORT}\x1b[0m`
  );
});
