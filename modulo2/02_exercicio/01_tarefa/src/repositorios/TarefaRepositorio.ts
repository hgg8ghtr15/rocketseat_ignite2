import { Tarefa } from '../model/Tarefa'

interface ITarefaDTO {

  id?: string
  nome: string;
  duracao: string;
  status: boolean;

}


class TarefaRepositorio {

  private tarefas: Tarefa[]

  constructor() {
    this.tarefas = []
  }

  criarTarefa({ nome, duracao }: ITarefaDTO): Tarefa {
    const tarefa = new Tarefa()
    Object.assign(tarefa, {
      nome,
      duracao,
    })
    console.log(tarefa)
    this.tarefas.push(tarefa)
    return tarefa
  }

  editarTarefa({ id, nome, duracao, status }: ITarefaDTO): Tarefa {
    console.log(id)
    console.log(this.tarefas)
    const tarefa = this.tarefas.find(tarefa => tarefa.id === id)

    if (!tarefa) {
      throw new Error("Tarefa não encontrada");
    }

    if (nome) {
      tarefa.nome = nome
    }
    if (duracao) {
      tarefa.duracao = duracao
    }
    if (status) {
      tarefa.status = status
    }
    return tarefa
  }

  deletarTarefa() {

  }

  listarTarefas() {

  }

  buscarTarefa() {

  }

}
export { TarefaRepositorio }