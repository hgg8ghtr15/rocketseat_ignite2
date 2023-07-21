import { Tarefa_Model } from "../model/Tarefa";
import { ICriarTarefa, ITarefaRepository } from "./ITarefaRepository";


class TarefaRepository implements ITarefaRepository {

  private tarefaRepository: Tarefa_Model[]

  constructor() {
    this.tarefaRepository = []
  }

  criarTarefa({ id, nome }: ICriarTarefa): string {
    const tarefa = new Tarefa_Model
    Object.assign(tarefa, { id, nome })
    this.tarefaRepository.push(tarefa)
    console.log(this.tarefaRepository)
    return "Tarefa Criada com Sucesso!"
  }

  listarTarefaId(id: string): Tarefa_Model {
    throw new Error("Method not implemented.");
  }
  listarTarefas(): Tarefa_Model[] {
    // console.log(this.tarefaRepository)
    return this.tarefaRepository
  }

}

export { TarefaRepository }