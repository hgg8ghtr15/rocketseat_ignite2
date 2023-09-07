import { Request, Response } from "express";
import { CriarUsuarioUseCase } from "./CriarUsuarioUseCase";
import { Usuario } from "../../entities/Usuario";


class CriarUsuarioController {
  private criarUsuarioUseCase: CriarUsuarioUseCase

  constructor(criarUsuarioUseCase: CriarUsuarioUseCase) {
    this.criarUsuarioUseCase = criarUsuarioUseCase
  }

  async handle(request: Request, response: Response): Promise<Response> {
    const { nome, email, senha } = request.body
    try {
      const usuario = await this.criarUsuarioUseCase.execute({ nome, email, senha })
      if (usuario instanceof Usuario) {
        return response.status(201).json({usuario})
      }
      return response.status(400).json({ message: usuario })
    } catch (error) {
      throw new Error("Method not implemented.");
    }
  }
}

export { CriarUsuarioController }
