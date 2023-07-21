import { v4 as uuidv4 } from 'uuid'

class Categoria {
  constructor() {
    if (!this.id) {
      this.id = uuidv4()
    }
    if (!this.dataCriacao) {
      this.dataCriacao = new Date()
    }
  }

  id?: string;
  nome: string;
  descricao: string;
  dataCriacao?: Date;

}

export { Categoria } 