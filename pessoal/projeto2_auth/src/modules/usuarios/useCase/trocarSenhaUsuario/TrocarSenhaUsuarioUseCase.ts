import { UsuarioRepositorio } from "../../repository/implements/UsuarioRepositorio"

interface ITrocarSenhaUsuario {
  id: number
  senha: string
  senhaNova: string
}

class TrocarSenhaUsuarioUseCase {

  private usuarioRepositorio: UsuarioRepositorio

  constructor(usuarioRepositorio: UsuarioRepositorio) {
    this.usuarioRepositorio = usuarioRepositorio
  }

  async execute({ id, senha, senhaNova }: ITrocarSenhaUsuario) {
    try {
      const usuario = await this.usuarioRepositorio.trocarSenhaUsuario({ id, senha, senhaNova })
      return usuario
    } catch (error) {
      console.log(error)
      throw new Error(`Erro ao tentar executar a troca da senha!`)
    }
  }

}

export { TrocarSenhaUsuarioUseCase }