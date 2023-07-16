import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Tarefa } from "./Farafa";

@Entity('usuario')
export class Usuario {

  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: "text" })
  nome: string;
  @Column({ type: "text" })
  email: string;
  @Column({ type: "text" })
  senha: string;
  @Column({ type: "date" })
  dataCadastro: Date

  @OneToMany(() => Tarefa, (tarefa) => tarefa.id)
  tarefas: Tarefa[]

  constructor() {
    if (!this.dataCadastro) {
      this.dataCadastro = new Date()
    }
  }

}