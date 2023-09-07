import { Request, Response } from "express";
import { DelatarUsuarioUseCase } from "./DelatarUsuarioUseCase";

class DelatarUsuarioController {
  private delatarUsuarioUseCase: DelatarUsuarioUseCase
  constructor(delatarUsuarioUseCase: DelatarUsuarioUseCase) {
    this.delatarUsuarioUseCase = delatarUsuarioUseCase
  }

  async handle(request: Request, response: Response) {
    const { id } = request.params
    try {
      const usuario = await this.delatarUsuarioUseCase.execute({ id: Number(id) })
      return response.status(200).json({ message: usuario })
    } catch (error) {
      throw new Error(`Erro ao realziar Handle!`)
    }
  }
}


export { DelatarUsuarioController }