import { Categoria } from '../../model/Categoria'
import { ICategoriaRepositorio, ICriarCategoriaDTO } from '../ICategoriaRepositorio'

// usado para transacionar os dados entre as toras eo 

class CategoriaRepositorio implements ICategoriaRepositorio {

  private categorias: Categoria[]

  private static INSTANCE: CategoriaRepositorio

  private constructor() {
    this.categorias = []
  }

  public static getInstance(): CategoriaRepositorio {
    if (!CategoriaRepositorio.INSTANCE) {
      CategoriaRepositorio.INSTANCE = new CategoriaRepositorio()
    }
    return CategoriaRepositorio.INSTANCE
  }

  criarCategoria({ nome, descricao }: ICriarCategoriaDTO): void {
    const categoria = new Categoria()
    // const existeCategoria = this.categorias.find(categoria => categoria.nome === nome)
    // if (existeCategoria) {
    //   return 'Categoria já existe!'
    // }
    Object.assign(categoria, {
      nome,
      descricao
    })
    this.categorias.push(categoria)
    console.log(this.categorias)
    console.log("Cadastrado com sucesso!")
  }

  listarCategorias(): Categoria[] {
    console.log(this.categorias)
    return this.categorias
  }

  findByNomeCategoria(nome: string): Categoria {
    const categoria = this.categorias.find(categoria => categoria.nome === nome)
    return categoria
  }
}

export { CategoriaRepositorio }