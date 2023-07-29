import { Tarefa } from "../../entities/Tarefa";
import { TarefaRepositorioMysql } from "../../repository/Imprmentacacao/TarefaRepositotioMysql"

interface IRequest {
  id: Number;
}

class ListartarefaPorIdUseCase {

  private tarefaRepositorioMysql: TarefaRepositorioMysql

  constructor(tarefaRepositorioMysql: TarefaRepositorioMysql) {
    this.tarefaRepositorioMysql = tarefaRepositorioMysql
  }

  async execute({ id }: IRequest) {
    try {
      const tarefa = await this.tarefaRepositorioMysql.listartarefaPorId(id);
      return tarefa
    } catch (error) {
      return error
    }
  }


}

export { ListartarefaPorIdUseCase }