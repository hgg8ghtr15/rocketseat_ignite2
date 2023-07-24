import { v4 as uuid } from 'uuid'


class Tarefa {

  id?: string;
  nome: string;
  descricao: string;
  dataCriacao?: Date;
  dataTermino?: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
    if (!this.dataCriacao) {
      this.dataCriacao = new Date()
    }
    if (this.dataTermino) {
      this.dataTermino = null
    }
  }

}

export { Tarefa }