import { UsuarioRepositorio } from "../../repository/implements/UsuarioRepositorio";

interface IListarUsuarioUseCase {
  id: Number
}

class ListarUsuarioIDUseCase {

  private usuarioRepository: UsuarioRepositorio;

  constructor(usuarioRepository: UsuarioRepositorio) {
    this.usuarioRepository = usuarioRepository;
  }

  async execute({ id }: IListarUsuarioUseCase) {
    try {
      return await this.usuarioRepository.listarUsuarioID(id)
    } catch (error) {
      throw new Error("Falha no Serviço")
    }
  }
}

export { ListarUsuarioIDUseCase }