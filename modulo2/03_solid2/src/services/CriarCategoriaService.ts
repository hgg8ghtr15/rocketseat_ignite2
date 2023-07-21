import { CategoriaRepositorio } from "../respositories/CategoriaRepositorio";
import { ICategoriaRepositorio } from "../respositories/ICategoriaRepositorio";

interface IRequest {
  nome: string;
  descricao: string;
}

class CriarCategoriaService {
  private categoriaRepositorio: ICategoriaRepositorio

  constructor(categoriaRepositorio: ICategoriaRepositorio) {
    this.categoriaRepositorio = categoriaRepositorio
  }
  //mesma coisa da linha de cima
  // constructor(private categoriaRepositorio: CategoriaRepositorio) {
  // }

  execute({ nome, descricao }: IRequest): void {
    const categoria = this.categoriaRepositorio.findByNomeCategoria(nome)

    if (categoria) {
      throw new Error("Categoia Já cadastrada")
    }
    const mensagem = this.categoriaRepositorio.criarCategoria({ nome, descricao })
  }

}

export { CriarCategoriaService }