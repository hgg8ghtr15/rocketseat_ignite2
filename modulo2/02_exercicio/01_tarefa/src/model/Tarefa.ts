import { v4 as uuidv4 } from 'uuid'

class Tarefa {

  id?: string;
  nome: string;
  duracao: string;
  status: boolean;
  dataConclusao?: Date;
  dataCriacao?: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4()
    }
    if (!this.dataCriacao) {
      this.dataCriacao = new Date()
    }
    if (!this.status) {
      this.status = true
    }
  }
}

export { Tarefa }