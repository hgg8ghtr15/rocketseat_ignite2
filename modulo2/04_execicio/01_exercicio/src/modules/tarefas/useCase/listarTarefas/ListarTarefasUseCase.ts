import { Tarefa } from "../../model/Tarefa"
import { ITarefaRepositorio } from "../../repository/ITarefa"


class ListarTarefasUseCase {

  private tarefaRepositorio: ITarefaRepositorio

  constructor(tarefaRepositorio: ITarefaRepositorio) {
    this.tarefaRepositorio = tarefaRepositorio
  }

  execute(): Tarefa[] {
    const tarefas = this.tarefaRepositorio.listarTarefas()
    return tarefas
  }

}

export { ListarTarefasUseCase }