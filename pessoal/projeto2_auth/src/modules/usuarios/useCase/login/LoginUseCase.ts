import { UsuarioRepositorio } from "../../repository/implements/UsuarioRepositorio"

interface ILogin {
  email: string;
  senha: string;
}

class LoginUseCase {

  private usuarioRepositorio: UsuarioRepositorio
  constructor(usuarioRepositorio: UsuarioRepositorio) {
    this.usuarioRepositorio = usuarioRepositorio
  }

  async execute({ email, senha }: ILogin) {
    try {
      const result = this.usuarioRepositorio.login({ email, senha })
      return result
    } catch (error) {
      throw new Error(`Erro ao tentar Executar login`)
    }
  }

}

export { LoginUseCase }