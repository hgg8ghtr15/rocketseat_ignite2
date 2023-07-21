import { Categoria } from "../model/Categoria";
import { ICategoriaRepositorio, ICriarCategoriaDTO } from "./ICategoriaRepositorio";

class PostgresCategoriaRepositorio implements ICategoriaRepositorio {
  findByNomeCategoria(nome: string): Categoria {
    console.log("Teste")
    return null
  }

  listarCategorias(): Categoria[] {
    console.log("Teste")
    return null
  }

  criarCategoria({ nome, descricao }: ICriarCategoriaDTO): void {
    console.log("Teste")
    return null
  }
}

export { PostgresCategoriaRepositorio }