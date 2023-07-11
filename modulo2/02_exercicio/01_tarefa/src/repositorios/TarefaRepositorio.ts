import { Tarefa } from '../model/Tarefa'
import { Connection } from '../database/conexao'
interface ITarefaDTO {

  id?: string
  nome: string;
  duracao: string;
  status: boolean;
  dataConclusao: Date;
}

class TarefaRepositorio {

  private connection: Connection;

  constructor() {
    this.connection = new Connection();
  }

  criarTarefa({ nome, duracao, dataConclusao }: ITarefaDTO): Promise<Tarefa> {
    const tarefa = new Tarefa()
    Object.assign(tarefa, {
      nome,
      duracao,
      dataConclusao
    })

    const sql = 'INSERT INTO tarefa (id, nome, duracao, status, data_conclusao, data_criacao) VALUES (?, ?, ?, ?, ?, ?)';
    const values = [tarefa.id, tarefa.nome, tarefa.duracao, tarefa.status, tarefa.dataConclusao, tarefa.dataCriacao];
    return new Promise((resolve, reject) => {
      this.connection.query(sql, values, (err, result) => {
        if (err) {
          console.error('Erro ao inserir tarefa no banco de dados:', err);
          reject(err);
          return;
        }
        console.log('Tarefa inserida com sucesso!');
        resolve(tarefa);
      });
    });
  }

  // editarTarefa({ id, nome, duracao, status }: ITarefaDTO): Tarefa {
  //   console.log(id)
  //   console.log(this.tarefas)
  //   const tarefa = this.tarefas.find(tarefa => tarefa.id === id)

  //   if (!tarefa) {
  //     throw new Error("Tarefa não encontrada");
  //   }

  //   if (nome) {
  //     tarefa.nome = nome
  //   }
  //   if (duracao) {
  //     tarefa.duracao = duracao
  //   }
  //   if (status) {
  //     tarefa.status = status
  //   }
  //   return tarefa
  // }

  deletarTarefa() {

  }

  listarTarefas(): Promise<Tarefa[]> {
    const sql = 'SELECT * FROM tarefa';

    return
  }

  buscarTarefa() {

  }

}
export { TarefaRepositorio }