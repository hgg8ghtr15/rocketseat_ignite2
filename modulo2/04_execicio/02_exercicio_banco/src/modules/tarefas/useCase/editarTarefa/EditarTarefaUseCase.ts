import { Tarefa } from "../../entities/Tarefa"
import { TarefaRepositorioMysql } from "../../repository/Imprmentacacao/TarefaRepositotioMysql"

interface IRequest {
  id: Number
  nome: string
  descricao: string
}

class EditarTarefaUseCase {

  private tarefaRepositorioMysql: TarefaRepositorioMysql

  constructor(tarefaRepositorioMysql: TarefaRepositorioMysql) {
    this.tarefaRepositorioMysql = tarefaRepositorioMysql
  }

  async execute({ id, nome, descricao }: IRequest) {
    try {
      const tarefa = await this.tarefaRepositorioMysql.editarTarefa({ id, nome, descricao })
      return tarefa
    } catch (error) {
      return error
    }
  }

}

export { EditarTarefaUseCase }