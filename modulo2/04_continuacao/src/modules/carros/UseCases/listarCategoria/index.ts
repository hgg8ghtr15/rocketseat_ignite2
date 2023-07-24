import { ListarCategoriaUseCase } from "./ListarCategoriaUseCase";
import { ListarCategoriaController } from "./ListarCategoriaController";
import { CategoriaRepositorio } from "../../respositories/implementacaoes/CategoriaRepositorio";
// import { categoriaRepositorio } from "../criarCategoria";


const categoriaRepositorio = CategoriaRepositorio.getInstance()
const listarCategoriasUseCase = new ListarCategoriaUseCase(categoriaRepositorio)
const listarCategoriaController = new ListarCategoriaController(listarCategoriasUseCase)

export { listarCategoriaController }