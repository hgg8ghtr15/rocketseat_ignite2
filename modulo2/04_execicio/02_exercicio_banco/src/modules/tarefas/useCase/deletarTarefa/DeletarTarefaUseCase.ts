import { Tarefa } from "../../model/Tarefa"
import { TarefaRepositorio } from "../../repository/Imprmentacacao/TarefaRepositorio"


class DeletarTarefaUseCase {

  private tarefarepositorio: TarefaRepositorio
  constructor(tarefarepositorio: TarefaRepositorio) {
    this.tarefarepositorio = tarefarepositorio
  }

  execute(id: string): Tarefa {
    const tarefa = this.tarefarepositorio.deletarTarefa(id)
    return tarefa
  }

}

export { DeletarTarefaUseCase }