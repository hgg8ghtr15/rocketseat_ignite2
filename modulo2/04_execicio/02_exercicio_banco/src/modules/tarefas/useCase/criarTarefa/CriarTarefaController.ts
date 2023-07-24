import { Request, Response } from 'express'
import { CriarTarefaUseCase } from './CriarTarefaUseCase'

class CriarTarefaController {

  private criarTarefaUseCase: CriarTarefaUseCase

  constructor(criarTarefaUseCase: CriarTarefaUseCase) {
    this.criarTarefaUseCase = criarTarefaUseCase
  }

  remanejar(request: Request, response: Response) {
    const { nome, descricao, datacriacao } = request.body
    const tarefa = this.criarTarefaUseCase.execute({ nome, descricao, datacriacao })
    return response.status(201).json({tarefa})
  }

}

export { CriarTarefaController }