import { Request, Response } from "express"
import { ListarUsuarioIDUseCase } from "./ListarUsuarioIDUseCase"
import { Usuario } from "../../entities/Usuario"

class ListarUsuarioIDController {

  private listarUsuarioIDUseCase: ListarUsuarioIDUseCase

  constructor(listarUsuarioIDUseCase: ListarUsuarioIDUseCase) {
    this.listarUsuarioIDUseCase = listarUsuarioIDUseCase
  }

  async handle(request: Request, response: Response) {
    const { id } = request.params
    const { user } = request
    try {
      const usuario = await this.listarUsuarioIDUseCase.execute({ id: Number(id) })
      if (usuario instanceof Usuario) {
        return response.status(200).json({ usuario: usuario, userLogin: user })
      }
      return response.status(400).json({ message: 'Usuário não encontrado' })
    } catch (error) {

    }
  }
}

export { ListarUsuarioIDController }