import { Request, Response } from "express";
import { EditarUsuarioUseCase } from "./EditarUsuarioUseCase";
import { Usuario } from "../../entities/Usuario";


class EditarUsuarioController {
  private editarUsuarioUseCase: EditarUsuarioUseCase

  constructor(editarUsuarioUseCase: EditarUsuarioUseCase) {
    this.editarUsuarioUseCase = editarUsuarioUseCase
  }

  async handle(request: Request, response: Response) {
    const { id } = request.params
    const { nome, email } = request.body
    try {
      const usuario = await this.editarUsuarioUseCase.execute({ id: Number(id), nome, email })
      if (usuario instanceof Usuario) {
        return response.status(200).json({ usuario: usuario })
      }
      return response.status(400).json({ message: usuario })
    } catch (error) {
      throw new Error("Erro ao tentar Editar o usuário em Execute")
    }
  }
}

export { EditarUsuarioController }