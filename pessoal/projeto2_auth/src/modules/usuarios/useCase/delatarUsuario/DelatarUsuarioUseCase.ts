import { UsuarioRepositorio } from "../../repository/implements/UsuarioRepositorio"
import { } from "../../repository/IUsuario"

interface IDeletarUsuario {
  id: number
}

class DelatarUsuarioUseCase {

  private usuarioRepositorio: UsuarioRepositorio

  constructor(usuarioRepositorio: UsuarioRepositorio) {
    this.usuarioRepositorio = usuarioRepositorio
  }

  async execute({ id }: IDeletarUsuario) {
    try {
      const usuario = await this.usuarioRepositorio.delatarUsuario(id)
      return usuario
    } catch (error) {
      throw new Error(`Erro ao executar a ação de deletar usuário!`)
    }
  }

}

export { DelatarUsuarioUseCase }