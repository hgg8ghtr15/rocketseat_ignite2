import { Especificacao } from "../model/Especificacao";
import { IEspecificacaoRepository, IEspecificacaoRepositoryDTO } from "./IEspecificacaoRepository";


class EspecificacaoRepository implements IEspecificacaoRepository {
  private especificacoes: Especificacao[]

  constructor() {
    this.especificacoes = []
  }
  buscarPorNome(nome: any): Especificacao {
    const especificaco = this.especificacoes.find(especificacao => especificaco.nome === nome)
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

  }

}

export { EspecificacaoRepository }