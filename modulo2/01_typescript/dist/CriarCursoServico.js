"use strict";
/**
 * nome - string
 * duracao - number
 * instrutor - string
 */
Object.defineProperty(exports, "__esModule", { value: true });
class CriarCursoServico {
    execute({ duracao, nome, instrutor }) {
        console.log(nome, duracao, instrutor);
    }
}
exports.default = new CriarCursoServico();
