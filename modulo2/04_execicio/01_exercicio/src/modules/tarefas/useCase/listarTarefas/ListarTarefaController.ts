import { Request, Response } from "express"
import { ListarTarefasUseCase } from "./ListarTarefasUseCase"


class ListarTarefaController {

  private listarTarefasUseCase: ListarTarefasUseCase
  constructor(listarTarefasUseCase: ListarTarefasUseCase) {
    this.listarTarefasUseCase = listarTarefasUseCase
  }

  remanejar(request: Request, response: Response): Response {
    const tarefas = this.listarTarefasUseCase.execute()
    console.log(tarefas)
    return response.status(200).json({ tarefas })
  }

}

export { ListarTarefaController }