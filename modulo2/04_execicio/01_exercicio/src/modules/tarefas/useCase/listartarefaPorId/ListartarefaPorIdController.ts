import { Request, Response } from 'express'
import { ListartarefaPorIdUseCase } from "./ListartarefaPorIdUseCase"


class ListartarefaPorIdController {

  private listartarefaPorIdUseCase: ListartarefaPorIdUseCase
  constructor(listartarefaPorIdUseCase: ListartarefaPorIdUseCase) {
    this.listartarefaPorIdUseCase = listartarefaPorIdUseCase
  }

  remanejar(request: Request, response: Response): Response {
    const { id } = request.params
    const tarafa = this.listartarefaPorIdUseCase.execute({ id })

    return response.status(200).json({ tarafa })
  }

}

export { ListartarefaPorIdController }