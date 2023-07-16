import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Usuario } from "./Usuario";

@Entity('tarefas')
export class Tarefa {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  nome: string;

  @Column({ type: 'text' })
  descricao: string;

  @Column({ type: 'date' })
  dataCriacao: Date;

  @Column({ type: 'date', nullable: false })
  dataTermini: Date;

  @Column({ type: 'boolean' })
  status: boolean;

  @ManyToOne(() => Usuario, (usuario) => usuario.id)
  usuario: Usuario

  constructor() {
    if (!this.dataTermini) {
      this.dataTermini = new Date();
      this.dataTermini.setDate(this.dataTermini.getDate() + 30);
    }
    if (!this.status) {
      this.status = true;
    }
  }
}