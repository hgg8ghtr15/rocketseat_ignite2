import { Router } from "express"

import { listarUsuariosController } from "../modules/usuarios/useCase/listarUsuarios"
import { criarUsuarioController } from "../modules/usuarios/useCase/criarUsuario"
import { listarUsuarioIDController } from "../modules/usuarios/useCase/listarUsuarioID"
import { editarUsuarioController } from "../modules/usuarios/useCase/editarUsuario"
import { delatarUsuarioController } from "../modules/usuarios/useCase/delatarUsuario"
import { trocarSenhaUsuarioController } from "../modules/usuarios/useCase/trocarSenhaUsuario"
import { loginController } from "../modules/usuarios/useCase/login"


import { autenticacao } from "../modules/middlewares/autenticacao"
const usuarioRouter = Router()

usuarioRouter.get("/listarusuarios", autenticacao, (req, res) => {
  return listarUsuariosController.handle(req, res)
})

usuarioRouter.post("/criarusuarios", autenticacao, (req, res) => {
  return criarUsuarioController.handle(req, res)
})

usuarioRouter.get("/listarusuario/:id", autenticacao, (req, res) => {
  return listarUsuarioIDController.handle(req, res)
})

usuarioRouter.patch("/editarusuario/:id", autenticacao, (req, res) => {
  return editarUsuarioController.handle(req, res)
})

usuarioRouter.delete("/deletarusuario/:id", autenticacao, (req, res) => {
  return delatarUsuarioController.handle(req, res)
})

usuarioRouter.patch("/trocarsenhausuario/:id", (req, res) => {
  return trocarSenhaUsuarioController.handle(req, res)
})

usuarioRouter.post("/login", (req, res) => {
  return loginController.handle(req, res)
})
export { usuarioRouter }