"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const rotas_1 = require("./rotas");
const app = (0, express_1.default)();
const port = 5000;
/**
 *  Middleware
 */
app.use(express_1.default.json());
/**
 *  Route
 */
app.get('/', rotas_1.criarCurso);
app.listen(port, () => {
    console.log(`servidor iniciado em http://localhost:${port}/`);
});
