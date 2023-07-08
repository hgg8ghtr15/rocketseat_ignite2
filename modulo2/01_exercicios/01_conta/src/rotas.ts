import { Request, Response } from "express";
import CriarUsuarioServico from "./CriarUsuarioService"


export function criarUsuario(request: Request, response: Response) {
  const { nome, cpf, idade } = request.body

  CriarUsuarioServico.execute({
    nome: nome,
    cpf: cpf,
    idade: idade,
    saldo: 0,
    estrato: []
  })

  return response.send("Usuario cadastrado com Sucesso")
}