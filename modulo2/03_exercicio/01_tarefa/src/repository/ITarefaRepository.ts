import { Tarefa_Model } from '../model/Tarefa'


interface ICriarTarefa {
  id: string;
  nome: string;
}


interface ITarefaRepository {

  criarTarefa({ id, nome }: ICriarTarefa): string
  listarTarefaId(id: string): Tarefa_Model
  listarTarefas(): Tarefa_Model[]

}

export { ICriarTarefa, ITarefaRepository }