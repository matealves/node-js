import express, { Request, Response, ErrorRequestHandler } from "express";
import path from "path";
import dotenv from "dotenv";
import cors from "cors";
import passport from "passport";

import apiRoutes from "./src/routes/routes";

dotenv.config();

const server = express();

server.use(cors());

server.use(express.static(path.join(__dirname, "public")));
server.use(express.json());

server.use(passport.initialize());

// Routes
server.use("/", apiRoutes);

server.use((req: Request, res: Response) => {
  res.status(404);
  res.json({ error: "404 - Not Found" });
});

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  if (err.status) {
    res.status(err.status);
  } else {
    res.status(400); // Bad Request
  }

  if (err.message) {
    res.json({ error: err.message });
  } else {
    res.json({ error: "Ocorreu algum erro." });
  }
};
server.use(errorHandler);

const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log(`[PORT:${PORT}] \x1b[32mServidor local iniciado.\x1b[0m\n`);
});
