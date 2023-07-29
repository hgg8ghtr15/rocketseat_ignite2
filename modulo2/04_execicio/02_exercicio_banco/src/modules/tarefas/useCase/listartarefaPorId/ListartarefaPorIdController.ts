import { Request, Response } from 'express'
import { ListartarefaPorIdUseCase } from "./ListartarefaPorIdUseCase"
import { Tarefa } from '../../entities/Tarefa'


class ListartarefaPorIdController {

  private listartarefaPorIdUseCase: ListartarefaPorIdUseCase
  constructor(listartarefaPorIdUseCase: ListartarefaPorIdUseCase) {
    this.listartarefaPorIdUseCase = listartarefaPorIdUseCase
  }

  async remanejar(request: Request, response: Response) {
    const { id } = request.params
    const tarafa = await this.listartarefaPorIdUseCase.execute({ id: Number(id) })
    if (tarafa instanceof Tarefa) {
      return response.status(200).json({ tarafa })
    }
    return response.status(404).json({ message: tarafa })

  }

}

export { ListartarefaPorIdController }