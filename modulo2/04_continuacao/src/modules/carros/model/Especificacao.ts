import { v4 as uuid } from 'uuid'


class Especificacao {

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }

  id?: string;
  nome: string;
  descricao: string;
  created_at: Date;

}

export { Especificacao } 