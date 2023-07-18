import { Categoria } from '../model/Categoria'
import { ICategoriaRepositorio, ICriarCategoriaDTO } from './ICategoriaRepositorio'

// usado para transacionar os dados entre as toras eo 


class CategoriaRepositorio implements ICategoriaRepositorio {

  private categorias: Categoria[]

  constructor() {
    this.categorias = []
  }

  criarCategoria({ nome, descricao }: ICriarCategoriaDTO): void {
    const categoria = new Categoria()

    Object.assign(categoria, {
      nome,
      descricao
    })

    this.categorias.push(categoria)

  }

  listarCategorias(): Categoria[] {
    return this.categorias
  }

  findByNomeCategoria(nome: string): Categoria {
    const categoria = this.categorias.find(categoria => categoria.nome === nome)
    return categoria
  }
}

export { CategoriaRepositorio }