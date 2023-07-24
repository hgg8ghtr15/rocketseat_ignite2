import { Especificacao } from "../../model/Especificacao";
import { IEspecificacaoRepository, IEspecificacaoRepositoryDTO } from "../IEspecificacaoRepository";


class EspecificacaoRepository implements IEspecificacaoRepository {
  private especificacoes: Especificacao[]

  private static INSTANCE: EspecificacaoRepository

  private constructor() {
    this.especificacoes = []
  }

  public static getInstance(): EspecificacaoRepository {
    if (!EspecificacaoRepository.INSTANCE) {
      EspecificacaoRepository.INSTANCE = new EspecificacaoRepository()
    }
    return EspecificacaoRepository.INSTANCE
  }

  buscarPorNome(nome: string): Especificacao {
    const especificaco = this.especificacoes.find(especificacao => especificacao.nome === nome)
    return especificaco
  }

  criarEspecificacao({ nome, descricao }: IEspecificacaoRepositoryDTO): void {
    const especificacao = new Especificacao()

    Object.assign(especificacao, {
      nome,
      descricao,
      created_at: new Date()
    })

    this.especificacoes.push(especificacao)
    console.log(this.especificacoes)
  }

}

export { EspecificacaoRepository }