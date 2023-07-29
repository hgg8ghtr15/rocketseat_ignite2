import { Request, Response } from 'express'
import { CriarTarefaUseCase } from './CriarTarefaUseCase'
import { Tarefa } from '../../entities/Tarefa'

class CriarTarefaController {

  private criarTarefaUseCase: CriarTarefaUseCase

  constructor(criarTarefaUseCase: CriarTarefaUseCase) {
    this.criarTarefaUseCase = criarTarefaUseCase
  }

  async remanejar(request: Request, response: Response) {
    const { nome, descricao, datacriacao } = request.body
    const tarefa = await this.criarTarefaUseCase.execute({ nome, descricao, datacriacao })
    if (tarefa instanceof Tarefa) {
      return response.status(201).json({ tarefa })
    }
    return response.status(400).json({ message: tarefa })
  }
}


export { CriarTarefaController }