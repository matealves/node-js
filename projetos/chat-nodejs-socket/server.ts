import express, { Request, Response } from "express";
import path from "path";
import dotenv from "dotenv";
import cors from "cors";
import http from "http";
import { Server, Socket } from "socket.io";

// import apiRoutes from "./src/routes/routes";
dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

// Routes
// server.use("/", apiRoutes);

app.use((req: Request, res: Response) => {
  res.status(404);
  res.json({ error: "404 - Not Found" });
});

const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log(`[PORT:${PORT}] \x1b[32mApp Express iniciado...\x1b[0m`);
  console.log(
    `\x1b[0mServer local:\x1b[0m \x1b[36mhttp://localhost:${PORT}\x1b[0m`
  );
});

interface CustomSocket extends Socket {
  username?: string;
}

const connectedUsers: string[] = [];

io.on("connection", (socket: CustomSocket) => {
  console.log("connected...");

  socket.on("disconnect", () => {
    console.log("disconnected.");
  });

  socket.on("join-request", (username: string) => {
    socket.username = username;
    connectedUsers.push(username);
    console.log("connectedUsers:", connectedUsers);

    socket.emit("user-ok", connectedUsers);
  });
});
