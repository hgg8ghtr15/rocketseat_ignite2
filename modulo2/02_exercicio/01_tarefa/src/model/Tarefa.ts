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
    if (!this.status) {
      this.status = true
    }
    this.dataConclusao = null
    this.dataCriacao = new Date()
  }
}

export { Tarefa }