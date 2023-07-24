import { Request, Response } from 'express'
import { EditarTarefaUseCase } from "./EditarTarefaUseCase"


class EditarTarefaController {
  private editarTarefaUseCase: EditarTarefaUseCase

  constructor(editarTarefaUseCase: EditarTarefaUseCase) {
    this.editarTarefaUseCase = editarTarefaUseCase
  }

  remanejar(request: Request, response: Response) {
    const { id } = request.params
    const { nome, descricao } = request.body
    const tarefa = this.editarTarefaUseCase.execute({ id, nome, descricao })

    return response.status(201).json({ tarefa })
  }

}

export { EditarTarefaController }
