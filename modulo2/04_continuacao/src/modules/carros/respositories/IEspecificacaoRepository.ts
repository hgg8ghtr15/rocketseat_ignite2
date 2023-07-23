import { Especificacao } from "../model/Especificacao";


interface IEspecificacaoRepositoryDTO {
  nome: string;
  descricao: string;
}

interface IEspecificacaoRepository {
  criarEspecificacao({ nome, descricao }: IEspecificacaoRepositoryDTO): void
  buscarPorNome(nome): Especificacao
}

export { IEspecificacaoRepository, IEspecificacaoRepositoryDTO }