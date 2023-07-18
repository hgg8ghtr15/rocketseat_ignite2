
import { ICategoriaRepositorio } from "../respositories/ICategoriaRepositorio";

interface IRequest {
  nome: string;
  descricao: string;
}

class CriarCategoriaService {
  constructor(private categoriaRepositorio: ICategoriaRepositorio) {
  }
  execute({ nome, descricao }: IRequest): void {
    const categoria = this.categoriaRepositorio.findByNomeCategoria(nome)
    if (categoria) {
      throw new Error("Categoria Já existe!")
    }
    const mensagem = this.categoriaRepositorio.criarCategoria({ nome, descricao })
  }
}

export { CriarCategoriaService }