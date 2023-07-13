import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Video } from "./Video";
import { Diciplina } from "./Diciplina";

@Entity('alunos')
export class Aluno {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  nome: string;

  @Column({ type: 'text', nullable: true })
  descricao: string;

  @OneToMany(() => Video, (video) => video.aluno)
  videos: Video[]

  @ManyToMany(() => Diciplina, (diciplina) => diciplina.alunos)
  diciplinas: Diciplina[]
}