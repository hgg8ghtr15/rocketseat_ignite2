import { Router } from 'express'
import TarefaController from '../controllers/TarefaController'


const router = Router()

router.post('/tarefa', TarefaController.create)
router.get('/tarefa/:id', TarefaController.listarPorId)
router.get('/tarefas', TarefaController.listarTodasTarefas)
router.put('/tarefa/:id/editar', TarefaController.editarTarefa)
router.delete('/tarefa/:id', TarefaController.deletarTarefa)

export default router