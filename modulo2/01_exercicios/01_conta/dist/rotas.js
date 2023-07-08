"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.criarUsuario = void 0;
const CriarUsuarioService_1 = __importDefault(require("./CriarUsuarioService"));
function criarUsuario(request, response) {
    const { nome, cpf, idade } = request.body;
    CriarUsuarioService_1.default.execute({
        nome: nome,
        cpf: cpf,
        idade: idade,
        saldo: 0,
        estrato: []
    });
    return response.send("Usuario cadastrado com Sucesso");
}
exports.criarUsuario = criarUsuario;
