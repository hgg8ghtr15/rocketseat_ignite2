import { EspecificacaoRepository } from "../respositories/EspecificacaoRepository"
import { IEspecificacaoRepository } from "../respositories/IEspecificacaoRepository"

interface Irequest {
  nome: string
  descricao: string
}

class CriarEspecificacaoService {
  private especificacao: IEspecificacaoRepository

  constructor(especificacao: IEspecificacaoRepository) {
    this.especificacao = especificacao
  }

  execute({ nome, descricao }: Irequest): void {

    const especificacaoExistente = this.especificacao.buscarPorNome(nome)

    if (especificacaoExistente) {
      throw new Error(`Especificacao já existe`)
    }
    this.especificacao.criarEspecificacao({ nome, descricao })
  }
}

export { CriarEspecificacaoService }