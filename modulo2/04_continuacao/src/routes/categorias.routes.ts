import { Router, request, response } from 'express'
import { criarCategoriaController } from '../modules/carros/UseCases/criarCategoria'
import { listarCategoriaController } from '../modules/carros/UseCases/listarCategoria'


const categoriasRoutes = Router()

categoriasRoutes.post("/", (request, response) => {
  return criarCategoriaController.handle(request, response)
})

categoriasRoutes.get("/", (request, response) => {
  return listarCategoriaController.handle(request, response)
})

export { categoriasRoutes }