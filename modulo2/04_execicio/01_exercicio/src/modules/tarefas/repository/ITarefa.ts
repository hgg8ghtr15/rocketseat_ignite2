import { Tarefa } from "../model/Tarefa";


interface ITarefaDTO {
  nome: string;
  descricao: string;
  dataCriacao: Date;
}

interface ITarefaEditDTO {
  id: string;
  nome: string;
  descricao: string;
}

interface ITarefaRepositorio {

  listarTarefas(): Tarefa[]
  listartarefaPorId(id: string): Tarefa
  criarTarefa({ nome, descricao, dataCriacao }: ITarefaDTO): Tarefa
  editarTarefa({ id, nome, descricao }: ITarefaEditDTO): Tarefa
  deletarTarefa(id: string): Tarefa

}

export { ITarefaRepositorio, ITarefaDTO, ITarefaEditDTO }