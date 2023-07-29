import { Tarefa } from "../../entities/Tarefa"
import { TarefaRepositorioMysql } from "../../repository/Imprmentacacao/TarefaRepositotioMysql"


class DeletarTarefaUseCase {

  private tarefaRepositorioMysql: TarefaRepositorioMysql
  constructor(tarefaRepositorioMysql: TarefaRepositorioMysql) {
    this.tarefaRepositorioMysql = tarefaRepositorioMysql
  }

  async execute(id: Number): Promise<string> {
    const tarefa = await this.tarefaRepositorioMysql.deletarTarefa(id)
    return tarefa
  }

}

export { DeletarTarefaUseCase }