import { Categoria } from '../model/Categoria'

// usado para transacionar os dados entre as toras eo 
interface ICriarCategoriaDTO {
  nome: string
  descricao: string
}

class CategoriaRepositorio {

  private categorias: Categoria[]

  constructor() {
    this.categorias = []
  }

  criarCategoria({ nome, descricao }: ICriarCategoriaDTO): String {
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
    return "Cadastrado com sucesso!"
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