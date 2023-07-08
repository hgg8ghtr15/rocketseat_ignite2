"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const rotas_1 = require("./rotas");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const port = 5000;
const host = 'localhost';
app.post('/usuario', rotas_1.criarUsuario);
app.listen(port, () => {
    console.log(`servidor online em http://${host}:${port}/`);
});
