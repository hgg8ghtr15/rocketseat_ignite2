import { Request, Response } from "express";
import { TrocarSenhaUsuarioUseCase } from "./TrocarSenhaUsuarioUseCase";


class TrocarSenhaUsuarioController {
  private trocarSenhaUsuarioUseCase: TrocarSenhaUsuarioUseCase

  constructor(trocarSenhaUsuarioUseCase: TrocarSenhaUsuarioUseCase) {
    this.trocarSenhaUsuarioUseCase = trocarSenhaUsuarioUseCase;
  }

  async handle(request: Request, response: Response) {
    const { id } = request.params
    const { senha, senhaNova } = request.body;
    try {
      const usuario = await this.trocarSenhaUsuarioUseCase.execute({ id: Number(id), senha, senhaNova });
      console.log(usuario)
      return response.status(200).json({ message: usuario })
    } catch (error) {
      console.log(error)
      throw new Error(`Erro ao realizar o Handler de troca de Senha!`)
    }
  }
}

export { TrocarSenhaUsuarioController }