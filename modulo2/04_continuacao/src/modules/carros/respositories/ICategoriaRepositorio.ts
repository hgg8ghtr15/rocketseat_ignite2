import { Categoria } from "../model/Categoria"


interface ICriarCategoriaDTO {
  nome: string
  descricao: string
}


interface ICategoriaRepositorio {
  findByNomeCategoria(nome: string): Categoria
  listarCategorias(): Categoria[]
  criarCategoria({ nome, descricao }: ICriarCategoriaDTO): void
}


export { ICategoriaRepositorio, ICriarCategoriaDTO }