import { UsuarioRepositorio } from "../../repository/implements/UsuarioRepositorio"
import { IEditarUsuario } from "../../repository/IUsuario"


class EditarUsuarioUseCase {

  private usuarioRepositorio: UsuarioRepositorio

  constructor(usuarioRepositorio: UsuarioRepositorio) {
    this.usuarioRepositorio = usuarioRepositorio
  }

  async execute({ id, nome, email }: IEditarUsuario) {
    try {
      const usuario = await this.usuarioRepositorio.editarUsuario({ id, nome, email })
      return usuario
    } catch (error) {
      throw new Error("Erro ao tentar Executar editarUsuario!")
    }
  }

}

export { EditarUsuarioUseCase }