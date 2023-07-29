import { Request, Response } from 'express'

import { DeletarTarefaUseCase } from "./DeletarTarefaUseCase"

class DeletarTarefaController {

  private deletarTarefaUseCase: DeletarTarefaUseCase
  constructor(deletarTarefaUseCase: DeletarTarefaUseCase) {
    this.deletarTarefaUseCase = deletarTarefaUseCase
  }

  async remanejar(request: Request, response: Response) {
    const { id } = request.params
    const tarefa = await this.deletarTarefaUseCase.execute(Number(id))
    return response.status(200).json({ message: tarefa })
  }

}

export { DeletarTarefaController }