import { Tarefa_Model } from "../model/Tarefa";
import { ITarefaRepository } from "../repository/ITarefaRepository";



class ListarTarefasService {

  private tarefarepository: ITarefaRepository

  constructor(tarefatarefarepository: ITarefaRepository) {
    this.tarefarepository = tarefatarefarepository
  }

  execute(): Tarefa_Model[] {
    console.log(this.tarefarepository.listarTarefas())
    return this.tarefarepository.listarTarefas()
  }

}

export { ListarTarefasService }