import { CategoriaRepositorio } from "../../respositories/implementacaoes/CategoriaRepositorio";
import { CriarCategoriaUseCase } from "./CriarCategoriaUseCase";
import { CriarCategoriaController } from './CriarCategoriaController'

const categoriaRepositorio = CategoriaRepositorio.getInstance()
const criarCategoriaUseCase = new CriarCategoriaUseCase(categoriaRepositorio)
const criarCategoriaController = new CriarCategoriaController(criarCategoriaUseCase)

export { criarCategoriaController, categoriaRepositorio }