import { Router } from "express";
import { TarefaRepositorio } from '../repositorios/TarefaRepositorio'


const tarefaRouter = Router();
const tarefaRepositories = new TarefaRepositorio

tarefaRouter.post("/", (request, response) => {
  let { nome, duracao, status, dataConclusao } = request.body
  dataConclusao = new Date(dataConclusao + ' 00:00')
  const tarefa = tarefaRepositories.criarTarefa({ nome, duracao, status, dataConclusao })
  return response.status(200).json(tarefa)
})

// tarefaRouter.post("/:id", (request, response) => {
//   const { nome, duracao, status } = request.body
//   const { id } = request.params
//   const tarefa = tarefaRepositories.editarTarefa({ id, nome, duracao, status })
//   return response.status(200).json(tarefa)
// })


export { tarefaRouter }