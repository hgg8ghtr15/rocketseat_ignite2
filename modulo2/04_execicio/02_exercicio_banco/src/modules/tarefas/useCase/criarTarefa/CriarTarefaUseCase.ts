import { Tarefa } from "../../entities/Tarefa";
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

  async execute({ nome, descricao, datacriacao }: IRequest) {
    const dataCriacao = new Date(datacriacao)
    try {
      const tarefa = await this.tarefaRepositorio.criarTarefa({ nome, descricao, dataCriacao })
      return tarefa
    } catch (error) {
      return error
    }
  }
}

export { CriarTarefaUseCase }