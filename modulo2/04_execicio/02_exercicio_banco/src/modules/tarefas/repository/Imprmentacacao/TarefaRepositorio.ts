import { Tarefa } from "../../entities/Tarefa";
import { ITarefaDTO, ITarefaEditDTO, ITarefaRepositorio } from "../ITarefa";


class TarefaRepositorio implements ITarefaRepositorio {

  private tarefas: Tarefa[]

  private static INSTANCE: TarefaRepositorio

  private constructor() {
    this.tarefas = []
  }

  public static getInstance(): TarefaRepositorio {
    if (!TarefaRepositorio.INSTANCE) {
      TarefaRepositorio.INSTANCE = new TarefaRepositorio
    }
    return TarefaRepositorio.INSTANCE
  }

  async listarTarefas(): Promise<Tarefa[]> {
    try {
      // console.log(this.tarefas)
      return await this.tarefas || []
    } catch (error) {
      throw new Error(`Erro ao listar tarefas.`);
    }
  }

  async listartarefaPorId(id: Number): Promise<Tarefa> {
    try {
      const tarefa = await this.tarefas.find(tarefa => tarefa.id === id);
      if (!tarefa) {
        throw new Error(`Erro ao listar tarfa ${id}`);
      }
      return tarefa
    } catch (error) {
      throw new Error(`Erro ao listar tarfa ${id}`);
    }
  }

  async criarTarefa({ nome, descricao, dataCriacao }: ITarefaDTO): Promise<Tarefa> {
    try {
      const tarefa = new Tarefa
      Object.assign(tarefa, {
        nome,
        descricao,
        dataCriacao,
        dataTermino: null
      })
      this.tarefas.push(tarefa)
      console.log(this.tarefas)
      return tarefa

    } catch (error) {
      throw new Error(`Erro ao tentar criar tarefa.`);
    }
  }

  async editarTarefa({ id, nome, descricao }: ITarefaEditDTO): Promise<Tarefa> {
    try {
      const tarefa = this.tarefas.find(tarefa => tarefa.id === id)
      if (!tarefa) {
        throw new Error("Erro ao tentar Editar a tarefa.")
      }
      Object.assign(tarefa, {
        nome, descricao
      })
      return tarefa
    } catch (error) {
      throw new Error("Erro ao tentar Editar a tarefa.");
    }
  }

  async deletarTarefa(id: Number): Promise<string> {
    try {
      const tarefa = this.tarefas.find(tarefa => tarefa.id === id)
      if (!tarefa) {
        throw new Error(`Tarefa id ${id} não encontrada!`);
      }
      this.tarefas.splice(this.tarefas.indexOf(tarefa), 1)
      return (`Tarefa deletada com sucesso!`)
    } catch (error) {
      throw new Error(`Erro ao tentar excluir tarefa!`)
    }
  }

}

export { TarefaRepositorio }