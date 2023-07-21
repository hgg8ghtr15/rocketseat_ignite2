import { Router } from 'express'
import { CategoriaRepositorio } from '../respositories/CategoriaRepositorio'

import { CriarCategoriaService } from '../services/CriarCategoriaService'
import { PostgresCategoriaRepositorio } from '../respositories/PostgresCategoriaRepositorio'

const categoriasRoutes = Router()
const categoriaRepositorio = new PostgresCategoriaRepositorio

categoriasRoutes.post("/", (request, response) => {
  const { nome, descricao } = request.body
  const criarCategoriaService = new CriarCategoriaService(categoriaRepositorio)
  criarCategoriaService.execute({ nome, descricao })
  return response.status(200).send("Cadastrado")
})

categoriasRoutes.get("/", (request, response) => {

  const categorias = categoriaRepositorio.listarCategorias()

  return response.status(200).json(categorias)
})

export { categoriasRoutes }