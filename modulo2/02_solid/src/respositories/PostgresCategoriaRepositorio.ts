import { Categoria } from "../model/Categoria";
import { ICategoriaRepositorio, ICriarCategoriaDTO } from "./ICategoriaRepositorio";

class PostgresCategoriaRepositorio implements ICategoriaRepositorio {

  criarCategoria({ nome, descricao }: ICriarCategoriaDTO): void {
    console.log(nome, descricao);

    return null
    // throw new Error("Method not implemented.");
  }

  listarCategorias(): Categoria[] {
    return null
    throw new Error("Method not implemented.");
  }

  findByNomeCategoria(nome: string): Categoria {
    console.log(nome)
    return null
    throw new Error("Method not implemented.");
  }
}

export { PostgresCategoriaRepositorio }