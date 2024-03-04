import express, { Request, Response } from "express";
import path from "path";
import dotenv from "dotenv";
import cors from "cors";

import apiRoutes from "./src/routes/routes";

dotenv.config();

const server = express();

server.use(cors());
server.use(express.static(path.join(__dirname, "public")));
// server.use(express.urlencoded({ extended: true }));
// server.use(express.json({ limit: "10mb", type: "application/json" }));
server.use(express.json());


// Routes
server.use("/", apiRoutes);

server.use((req: Request, res: Response) => {
  res.status(404);
  res.json({ error: "404 - Not Found" });
});

const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log(`[PORT:${PORT}] \x1b[32mServidor local iniciado.\x1b[0m\n`);
});
