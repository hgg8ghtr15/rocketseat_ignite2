import { Request, Response } from 'express'

import { ListarCategoriaUseCase } from "./ListarCategoriaUseCase"


class ListarCategoriaController {

  private listarCategoriaUseCase: ListarCategoriaUseCase

  constructor(listarCategoriaUseCase: ListarCategoriaUseCase) {
    this.listarCategoriaUseCase = listarCategoriaUseCase
  }

  handle(req: Request, res: Response): Response {

    const categorias = this.listarCategoriaUseCase.execute()

    return res.status(200).json({ categorias })
  }

}

export { ListarCategoriaController }