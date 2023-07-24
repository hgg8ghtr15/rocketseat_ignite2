import { Request, Response } from 'express'
import { CriarEspecificacaoUseCase } from "./CriarEspecificacaoUseCase"


class CriarEspecificacaoController {

  private criarEspecificacaoUseCase: CriarEspecificacaoUseCase

  constructor(criarEspecificacaoUseCase: CriarEspecificacaoUseCase) {
    this.criarEspecificacaoUseCase = criarEspecificacaoUseCase
  }
  handle(request: Request, response: Response): Response {
    const { nome, descricao } = request.body
    const especificacao = this.criarEspecificacaoUseCase.execute({ nome, descricao })

    return response.status(201).json({ especificacao })
  }

}

export { CriarEspecificacaoController }