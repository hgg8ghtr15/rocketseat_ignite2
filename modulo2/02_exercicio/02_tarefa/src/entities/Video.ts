import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Aluno } from "./Aluno";

@Entity('videos')
export class Video {

  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'text' })
  titulo: string

  @Column({ type: 'text' })
  url: string

  @ManyToOne(() => Aluno, aluno => aluno.videos)
  @JoinColumn({ name: 'video.Id' })
  aluno: Aluno
}