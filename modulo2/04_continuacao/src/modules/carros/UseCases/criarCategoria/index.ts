import { CategoriaRepositorio } from "../../respositories/CategoriaRepositorio";
import { CriarCategoriaUseCase } from "./CriarCategoriaUseCase";
import { CriarCategoriaController } from './CriarCategoriaController'

const categoriaRepositorio = new CategoriaRepositorio()
const criarCategoriaUseCase = new CriarCategoriaUseCase(categoriaRepositorio)
const criarCategoriaController = new CriarCategoriaController(criarCategoriaUseCase)

export { criarCategoriaController }