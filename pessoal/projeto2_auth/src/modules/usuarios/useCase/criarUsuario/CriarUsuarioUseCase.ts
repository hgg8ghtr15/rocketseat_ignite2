import { Usuario } from "../../entities/Usuario"
import { UsuarioRepositorio } from "../../repository/implements/UsuarioRepositorio"
import { ICriarUsuario } from "../../repository/IUsuario"


class CriarUsuarioUseCase {

  private usuarioRepositorio: UsuarioRepositorio

  constructor(usuarioRepositorio: UsuarioRepositorio) {
    this.usuarioRepositorio = usuarioRepositorio
  }

  async execute({ nome, email, senha }: ICriarUsuario) {
    try {

      const usuario = await this.usuarioRepositorio.criarUsuario({ nome, email, senha })
      return usuario
    } catch (error) {
      return error
    }
  }
}

export { CriarUsuarioUseCase }