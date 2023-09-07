import { IUsuarioRepository } from "../../repository/IUsuario"


class ListarUsuariosUseCase {

  private usuarioRepositorio: IUsuarioRepository

  constructor(usuarioRepositorio: IUsuarioRepository) {
    this.usuarioRepositorio = usuarioRepositorio
  }

  async execute() {
    try {
      const usuarios = await this.usuarioRepositorio.listarUsuarios()
      return usuarios
    } catch (error) {
      return error
    }
  }

}

export { ListarUsuariosUseCase }