import { Request, Response } from "express";
import CriarCursoServico from "./CriarCursoServico"

export function criarCurso(request: Request, response: Response) {

  CriarCursoServico.execute({
    nome: "Node",
    instrutor: "Fabio",
    duracao: 30
  })

  return response.send("Curso Criado")
}