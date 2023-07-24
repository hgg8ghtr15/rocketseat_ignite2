import { Tarefa } from "../../model/Tarefa"
import { TarefaRepositorio } from "../../repository/TarefaRepositorio"

interface IRequest {
  id: string
  nome: string
  descricao: string
}

class EditarTarefaUseCase {

  private tarefaRepositorio: TarefaRepositorio

  constructor(tarefaRepositorio: TarefaRepositorio) {
    this.tarefaRepositorio = tarefaRepositorio
  }

  execute({ id, nome, descricao }: IRequest): Tarefa {
    const tarefa = this.tarefaRepositorio.editarTarefa({ id, nome, descricao })
    return tarefa
  }

}

export { EditarTarefaUseCase }