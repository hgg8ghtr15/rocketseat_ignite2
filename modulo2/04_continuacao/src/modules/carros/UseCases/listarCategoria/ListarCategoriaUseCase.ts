import { Categoria } from "../../model/Categoria"
import { CategoriaRepositorio } from "../../respositories/implementacaoes/CategoriaRepositorio"


class ListarCategoriaUseCase {

  private categoriaRepositorio: CategoriaRepositorio

  constructor(categoriaRepositorio: CategoriaRepositorio) {
    this.categoriaRepositorio = categoriaRepositorio
  }

  execute(): Categoria[] {
    const categorias = this.categoriaRepositorio.listarCategorias()
    return categorias
  }

}

export { ListarCategoriaUseCase }