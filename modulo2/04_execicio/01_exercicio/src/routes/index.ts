import { Router } from 'express';
import { tarefaRouter } from './tarefa.routes';

const routers = Router()

routers.use(tarefaRouter)

export { routers }