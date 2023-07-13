import { AppDataSource } from '../data-source'
import { Diciplina } from '../entities/Diciplina'

export const diciplinaRepostory = AppDataSource.getRepository(Diciplina)