import { Tarefa } from "../model/Tarefa";
import { ITarefaDTO, ITarefaEditDTO, ITarefaRepositorio } from "./ITarefa";


class TarefaRepositorio implements ITarefaRepositorio {

  private tarefas: Tarefa[]
  constructor() {
    this.tarefas = []
  }

  listarTarefas(): Tarefa[] {
    try {
      // console.log(this.tarefas)
      return this.tarefas
    } catch (error) {
      error(`Erro ao listar tarefas.`);
    }
  }

  listartarefaPorId(id: string): Tarefa {
    try {
      const tarefa = this.tarefas.find(tarefa => tarefa.id === id);
      return tarefa
    } catch (error) {
      Error(`Erro ao listar tarfa ${id}`);
    }
  }

  criarTarefa({ nome, descricao, dataCriacao }: ITarefaDTO): Tarefa {
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
      error(`Erro ao tentar criar tarefa.`);
    }
  }

  editarTarefa({ id, nome, descricao }: ITarefaEditDTO): Tarefa {
    try {
      const tarefa = this.tarefas.find(tarefa => tarefa.id === id)
      if (!tarefa) {
        return null
      }
      Object.assign(tarefa, {
        nome, descricao
      })
      return tarefa
    } catch (error) {
      error("Erro ao tentar Editar a tarefa.");
    }
  }

  deletarTarefa(id: string): Tarefa {
    try {
      const tarefa = this.tarefas.find(tarefa => tarefa.id === id)

      if (!tarefa) {
        throw new Error(`Tarefa id ${id} não encontrada!`);
      }
      this.tarefas.splice(this.tarefas.indexOf(tarefa), 1)
      return tarefa
    } catch (error) {
      error(`Erro ao tentar excluir tarefa!`)
    }
  }


}

export { TarefaRepositorio }