"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CriarUsuarioServico {
    execute({ nome, cpf, idade, saldo = 0, estrato = [] }) {
        console.log(nome, cpf, idade, saldo, estrato);
    }
}
exports.default = new CriarUsuarioServico();
