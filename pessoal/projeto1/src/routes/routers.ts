import { Router } from 'express'
import TarefaController from '../controllers/TarefaController'
import UsuarioController from '../controllers/UsuarioController'

const router = Router()

router.post('/tarefa', TarefaController.create)
router.get('/tarefa/:id', TarefaController.listarPorId)
router.get('/tarefas', TarefaController.listarTodasTarefas)
router.put('/tarefa/:id/editar', TarefaController.editarTarefa)
router.delete('/tarefa/:id', TarefaController.deletarTarefa)

router.post('/usuario', UsuarioController.createUsuario)
router.get('/usuario/:id', UsuarioController.buscarUsurioId)
router.get('/usuario', UsuarioController.buscarTodosUsuarios)
router.put('/usuario/:id/editar', UsuarioController.editarUsuario)
router.delete('/usuario/:id', UsuarioController.deletarUsuario)

export default router