import { Router, request, response } from 'express'
import { CategoriaRepositorio } from '../modules/carros/respositories/CategoriaRepositorio'
import { criarCategoriaController } from '../modules/carros/UseCases/criarCategoria'


const categoriasRoutes = Router()
const categoriaRepositorio = new CategoriaRepositorio

categoriasRoutes.post("/", (request, response) => {
  return criarCategoriaController.remanajar(request, response)
})

categoriasRoutes.get("/", (request, response) => {

  const categorias = categoriaRepositorio.listarCategorias()

  return response.status(200).json(categorias)
})

export { categoriasRoutes }