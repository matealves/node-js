import { connect } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const dbConnection = async () => {
  try {
    await connect(process.env.MONGODB_URL as string);
    console.log("\x1b[32m✓ Conexão com o banco de dados.\x1b[0m");
  } catch (error) {
    console.log("\x1b[31mErro na conexão com o banco:\x1b[0m", error);
  }
};
