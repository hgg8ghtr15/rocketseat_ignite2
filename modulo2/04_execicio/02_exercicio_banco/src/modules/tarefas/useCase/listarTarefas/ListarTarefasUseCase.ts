import { Tarefa } from "../../entities/Tarefa"
import { ITarefaRepositorio } from "../../repository/ITarefa"


class ListarTarefasUseCase {

  private tarefaRepositorio: ITarefaRepositorio

  constructor(tarefaRepositorio: ITarefaRepositorio) {
    this.tarefaRepositorio = tarefaRepositorio
  }

  async execute() {
    try {
      const tarefas = await this.tarefaRepositorio.listarTarefas()
      return tarefas
    } catch (error) {
      return error
    }
  }

}

export { ListarTarefasUseCase }