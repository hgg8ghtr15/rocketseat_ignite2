import { Router, request } from 'express'
import { CategoriaRepositorio } from '../respositories/CategoriaRepositorio'
import { CriarCategoriaService } from '../services/CriarCategoriaService'
import { PostgresCategoriaRepositorio } from '../respositories/PostgresCategoriaRepositorio'

const categoriasRoutes = Router()
const categoriaRepositorio = new CategoriaRepositorio()

categoriasRoutes.post("/", (request, response) => {
  const { nome, descricao } = request.body

  const criarCategoriaSevide = new CriarCategoriaService(categoriaRepositorio)

  const mensagem = criarCategoriaSevide.execute({ nome, descricao })

  return response.status(200).send(mensagem)
})

categoriasRoutes.get("/", (request, response) => {

  const categorias = categoriaRepositorio.listarCategorias()

  console.log(categorias)
  return response.status(200).json(categorias)
})

export { categoriasRoutes }