import { Request, Response } from 'express'
import { EditarTarefaUseCase } from "./EditarTarefaUseCase"
import { Tarefa } from '../../entities/Tarefa'


class EditarTarefaController {
  private editarTarefaUseCase: EditarTarefaUseCase

  constructor(editarTarefaUseCase: EditarTarefaUseCase) {
    this.editarTarefaUseCase = editarTarefaUseCase
  }

  async remanejar(request: Request, response: Response) {
    const { id } = request.params
    const { nome, descricao } = request.body
    const tarefa = await this.editarTarefaUseCase.execute({ id: Number(id), nome, descricao })
    if (tarefa instanceof Tarefa) {
      return response.status(201).json({ tarefa })
    }
    return response.status(400).json({ message: tarefa })
  }

}

export { EditarTarefaController }
