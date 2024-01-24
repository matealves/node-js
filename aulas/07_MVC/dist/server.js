"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const index_1 = __importDefault(require("./src/routes/index"));
const painel_1 = __importDefault(require("./src/routes/painel"));
const server = (0, express_1.default)();
const PORT = 80;
// criar rotas para arquivos estáticos
server.use(express_1.default.static(path_1.default.join(__dirname, "public")));
// server.use(mainRoutes);
// podemos usar prefíxos para cada grupo de rotas
server.use("/", index_1.default);
server.use("/painel", painel_1.default);
server.use((req, res) => {
    res.status(404).send("404 - Página não encontrada.");
});
// $ npm start
server.listen(PORT, () => {
    // console.log(`\x1b[36mNode.js ${process.version}\x1b[0m`);
    console.log(`\x1b[36m[PORT:${PORT}] \x1b[32mApp Express iniciado...\x1b[0m`);
    console.log(`\x1b[32mServer local:\x1b[0m \x1b[36mhttp://localhost:${PORT}\x1b[0m`);
});
