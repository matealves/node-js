import { connect } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const mongoDBConnect = async () => {
  console.log("Conectando ao MongoDB...");

  try {
    await connect(process.env.MONGODB_URL as string);
    console.log("\x1b[32m✓ MongoDB conectado com o sucesso!\x1b[0m");
  } catch (error) {
    console.log("\x1b[31mErro na conexão com o banco:\x1b[0m", error);
  }
};
