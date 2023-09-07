import { Request, Response } from "express";
import { ListarUsuariosUseCase } from "./ListarUsuariosUseCase";


class ListarUsuariosController {

  private listarUsuariosUsecase: ListarUsuariosUseCase

  constructor(listarUsuariosUsecase: ListarUsuariosUseCase) {
    this.listarUsuariosUsecase = listarUsuariosUsecase
  }

  async handle(request: Request, response: Response) {
    const usuario = await this.listarUsuariosUsecase.execute()
    if (typeof (usuario) === "string") {
      return response.status(201).json({ message: usuario })
    }
    return response.status(201).json({ usuario, message: 'Usuários listados com sucesso!' });
  }
}

export { ListarUsuariosController }