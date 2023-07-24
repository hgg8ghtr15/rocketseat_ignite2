import { EspecificacaoRepository } from "../../respositories/implementacaoes/EspecificacaoRepository"
import { IEspecificacaoRepository } from "../../respositories/IEspecificacaoRepository"

interface Irequest {
  nome: string
  descricao: string
}

class CriarEspecificacaoUseCase {
  private especificacaoRepositorio: EspecificacaoRepository

  constructor(especificacaoRepositorio: EspecificacaoRepository) {
    this.especificacaoRepositorio = especificacaoRepositorio
  }

  execute({ nome, descricao }: Irequest): void {

    const especificacaoExistente = this.especificacaoRepositorio.buscarPorNome(nome)

    if (especificacaoExistente) {
      throw new Error(`Especificacao já existe`)
    }
    this.especificacaoRepositorio.criarEspecificacao({ nome, descricao })
  }
}

export { CriarEspecificacaoUseCase }