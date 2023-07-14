import { AppDataSource } from '../data-source'
import { Tarefa } from '../entities/Farafa'

export const tarefaRepository = AppDataSource.getRepository(Tarefa)