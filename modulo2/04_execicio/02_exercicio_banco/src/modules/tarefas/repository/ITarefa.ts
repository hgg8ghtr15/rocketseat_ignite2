import { Tarefa } from "../entities/Tarefa";


interface ITarefaDTO {
  nome: string;
  descricao: string;
  dataCriacao: Date;
}

interface ITarefaEditDTO {
  id: Number;
  nome: string;
  descricao: string;
}

interface ITarefaRepositorio {

  listarTarefas(): Promise<Tarefa[]>
  listartarefaPorId(id: Number): Promise<Tarefa | string>
  criarTarefa({ nome, descricao, dataCriacao }: ITarefaDTO): Promise<string | Tarefa>
  editarTarefa({ id, nome, descricao }: ITarefaEditDTO): Promise<string | Tarefa>
  deletarTarefa(id: Number): Promise<string>
}

export { ITarefaRepositorio, ITarefaDTO, ITarefaEditDTO }