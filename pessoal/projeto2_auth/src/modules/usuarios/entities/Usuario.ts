import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('usuario')
export class Usuario {

  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: "text" })
  nome: string

  @Column({ type: "text" })
  email: string

  @Column({ type: "text" })
  senha: string

  @Column({ type: "date" })
  dataCadastro: Date

  constructor() {
    if (this.dataCadastro) {
      this.dataCadastro = new Date()
    }
  }
}