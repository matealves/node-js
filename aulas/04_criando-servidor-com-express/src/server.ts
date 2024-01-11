import express, { Request, Response } from "express";

const server = express();
const PORT = 80;

server.get("/", (req: Request, res: Response) => {
  res.send("Hello, world!");
});

server.listen(PORT, () => {
  console.log(`\x1b[36mNode.js ${process.version}\x1b[0m`);
  console.log(`\x1b[36m[PORT:${PORT}] \x1b[32mApp Express iniciado...\x1b[0m`);
  console.log(
    `\x1b[32mServer local:\x1b[0m \x1b[36mhttp://localhost:${PORT}\x1b[0m`
  );
});
