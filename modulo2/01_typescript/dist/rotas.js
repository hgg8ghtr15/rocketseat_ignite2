"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.criarCurso = void 0;
const CriarCursoServico_1 = __importDefault(require("./CriarCursoServico"));
function criarCurso(request, response) {
    CriarCursoServico_1.default.execute({
        nome: "Node",
        instrutor: "Fabio",
        duracao: 30
    });
    return response.send("Curso Criado");
}
exports.criarCurso = criarCurso;
