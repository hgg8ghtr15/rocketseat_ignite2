import { v4 as uuid } from 'uuid'
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('tarefas')
class Tarefa {

  @PrimaryGeneratedColumn()
  id: Number;

  @Column({ type: 'text' })
  nome: string;

  @Column({ type: 'text' })
  descricao: string;

  @Column({ type: 'date' })
  dataCriacao?: Date;

  @Column({ type: 'date', nullable: true })
  dataTermino?: Date | null;

  @Column({ type: 'boolean' })
  concluido?: Boolean;

  constructor() {
    if (!this.dataCriacao) {
      this.dataCriacao = new Date()
    }
    if (this.dataTermino) {
      this.dataTermino = undefined
    }
    if (this.concluido) {
      this.concluido = false
    }
  }

}

export { Tarefa }

