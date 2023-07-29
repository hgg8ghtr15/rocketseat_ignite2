import { Request, Response } from "express"
import { ListarTarefasUseCase } from "./ListarTarefasUseCase"
import { Tarefa } from "../../entities/Tarefa"


class ListarTarefaController {

  private listarTarefasUseCase: ListarTarefasUseCase
  constructor(listarTarefasUseCase: ListarTarefasUseCase) {
    this.listarTarefasUseCase = listarTarefasUseCase
  }

  async remanejar(request: Request, response: Response) {
    const tarefas = await this.listarTarefasUseCase.execute()
    return response.status(200).json({ tarefas: tarefas })
  }

}

export { ListarTarefaController }