import { NextFunction, Request, Response, response } from "express";

import jwt from "jsonwebtoken"
import { UsuarioRepositorio } from "../usuarios/repository/implements/UsuarioRepositorio";

type JwtPayload = {
  id: number;
}

export const autenticacao = async (request: Request, res: Response, next: NextFunction) => {
  const { authorization } = request.headers
  try {
    const token = authorization?.split(" ")[1]
    const { id: ide } = jwt.verify(token ?? "", process.env.JWT_PASS ?? "") as JwtPayload

    const usuarioRepositorio = UsuarioRepositorio.getInstance()

    const usuario = await usuarioRepositorio.usuarioLogado(ide)
    if (!usuario) {
      return response.status(401).json({
        message: "Usuário não encontrado"
      })
    }

    request.user = usuario

    return next()

  } catch (error) {

  }
}
