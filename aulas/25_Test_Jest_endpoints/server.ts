import app from "./app";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`[PORT:${PORT}] \x1b[32mServidor local iniciado.\x1b[0m\n`);
});
