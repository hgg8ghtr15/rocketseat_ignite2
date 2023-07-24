import { Tarefa } from "../../model/Tarefa";
import { ITarefaRepositorio } from "../../repository/ITarefa";

interface IRequest {
  nome: string;
  descricao: string;
  datacriacao: string;
  dataTermino?: Date;
}



class CriarTarefaUseCase {

  private tarefaRepositorio: ITarefaRepositorio

  constructor(tarefaRepositorio: ITarefaRepositorio) {
    this.tarefaRepositorio = tarefaRepositorio
  }

  execute({ nome, descricao, datacriacao }: IRequest): Tarefa {
    const dataCriacao = new Date(datacriacao)
    const tarefa = this.tarefaRepositorio.criarTarefa({ nome, descricao, dataCriacao })
    return tarefa
  }

}

export { CriarTarefaUseCase }