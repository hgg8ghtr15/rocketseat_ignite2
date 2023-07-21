

class Tarefa_Model {

  id?: string;
  nome!: string;

  constructor() {
    if (this.id) {
      this.id = "1"
    }
  }
}

export { Tarefa_Model }