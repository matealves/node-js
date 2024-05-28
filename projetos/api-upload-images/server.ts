import dotenv from "dotenv";
import express from "express";
import { dbConnection } from "./src/db/mongoose";

import router from "./src/routes/routes";

dotenv.config();

const server = express();

const PORT = process.env.PORT || 3000;

// routes
server.use("/pictures", router);

server.listen(PORT, () => {
  console.log(`[PORT:${PORT}] \x1b[32mServidor local iniciado.\x1b[0m\n`);
});

console.log("Conectando ao MongoDB...");
dbConnection();
