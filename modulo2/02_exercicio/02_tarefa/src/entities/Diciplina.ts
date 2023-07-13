import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Aluno } from "./Aluno";

@Entity('diciplinas')
export class Diciplina {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  nome: string;

  @ManyToMany(() => Aluno, aluno => aluno.diciplinas)
  @JoinTable({
    name: 'aluno_diciplina',
    joinColumn: {
      name: 'aluno.id',
      referencedColumnName: 'id'
    },
    inverseJoinColumn: {
      name: 'diciplina.id',
      referencedColumnName: 'id'
    }

  })
  alunos: Aluno[]
}