import { Request, Response } from 'express'

import { DeletarTarefaUseCase } from "./deletarTarefaUseCase"

class DeletarTarefaController {

  private deletarTarefaUseCase: DeletarTarefaUseCase
  constructor(deletarTarefaUseCase: DeletarTarefaUseCase) {
    this.deletarTarefaUseCase = deletarTarefaUseCase
  }

  remanejar(request: Request, response: Response): Response {
    const { id } = request.params
    const tarefa = this.deletarTarefaUseCase.execute(id)
    return response.status(200).json({ tarefa })
  }

}

export { DeletarTarefaController }