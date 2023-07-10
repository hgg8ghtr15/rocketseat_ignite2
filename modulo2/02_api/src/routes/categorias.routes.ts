import { Router, request } from 'express'
import { CategoriaRepositorio } from '../respositories/CategoriaRepositorio'

const categoriasRoutes = Router()
const categoriaRepositorio = new CategoriaRepositorio

categoriasRoutes.post("/", (request, response) => {
  const { nome, descricao } = request.body

  const categoria = categoriaRepositorio.findByNomeCategoria(nome)

  if (categoria) {
    return response.status(400).json({ mensagem: "Categoria já existe!", categoria })
  }

  const mensagem = categoriaRepositorio.criarCategoria({ nome, descricao })

  return response.status(200).send(mensagem)
})

categoriasRoutes.get("/", (request, response) => {

  const categorias = categoriaRepositorio.listarCategorias()

  return response.status(200).json(categorias)
})

export { categoriasRoutes }