import { Router } from 'express'

import { criarTarefaController } from '../modules/tarefas/useCase/criarTarefa'
import { listarTarefaController } from '../modules/tarefas/useCase/listarTarefas'
import { editarTarefaController } from '../modules/tarefas/useCase/editarTarefa'
import { listartarefaPorIdController } from '../modules/tarefas/useCase/listartarefaPorId'
import { deletarTarefaController } from '../modules/tarefas/useCase/deletarTarefa'

const tarefaRouter = Router()

tarefaRouter.post("/tarefa", (req, res) => {
  return criarTarefaController.remanejar(req, res)
})

tarefaRouter.get("/tarefa", (req, res) => {
  return listarTarefaController.remanejar(req, res)
})

tarefaRouter.put("/tarefa/:id", (req, res) => {
  return editarTarefaController.remanejar(req, res)
})

tarefaRouter.get("/tarefa/:id", (req, res) => {
  return listartarefaPorIdController.remanejar(req, res)
})

tarefaRouter.delete("/tarefa/:id", (req, res) => {
  return deletarTarefaController.remanejar(req, res)
})

export { tarefaRouter }