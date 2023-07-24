import { Tarefa } from "../../model/Tarefa";
import { TarefaRepositorio } from "../../repository/Imprmentacacao/TarefaRepositorio"

interface IRequest {
  id: string;
}

class ListartarefaPorIdUseCase {

  private tarefaRepositorio: TarefaRepositorio

  constructor(tarefaRepositorio: TarefaRepositorio) {
    this.tarefaRepositorio = tarefaRepositorio
  }

  execute({ id }: IRequest): Tarefa {
    const tarefa = this.tarefaRepositorio.listartarefaPorId(id)
    return tarefa
  }


}

export { ListartarefaPorIdUseCase }