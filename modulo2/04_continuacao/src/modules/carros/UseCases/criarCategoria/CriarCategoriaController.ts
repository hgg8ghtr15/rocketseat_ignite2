import { Request, Response } from 'express'
import { CriarCategoriaUseCase } from './CriarCategoriaUseCase'


class CriarCategoriaController {

  private criarCategoriaUseCase: CriarCategoriaUseCase

  constructor(criarCategoriaUseCase: CriarCategoriaUseCase) {
    this.criarCategoriaUseCase = criarCategoriaUseCase
  }

  remanajar(request: Request, response: Response): Response {
    const { nome, descricao } = request.body
    this.criarCategoriaUseCase.execute({ nome, descricao })
    return response.status(200).send("Cadastrado")
  }

}
export { CriarCategoriaController }