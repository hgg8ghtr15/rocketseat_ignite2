import { ITarefaRepository } from "../repository/ITarefaRepository";

interface IRequest {
  nome: string;
  id: string;
}


class CriarTarefaService {
  private tarefarepository: ITarefaRepository
  constructor(tarefarepository: ITarefaRepository) {
    this.tarefarepository = tarefarepository
  }
  execute({ id, nome }: IRequest): string {
    const mensagem = this.tarefarepository.criarTarefa({ id, nome })
    return mensagem
  }
}

export { CriarTarefaService }