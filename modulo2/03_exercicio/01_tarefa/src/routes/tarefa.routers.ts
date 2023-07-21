import { Router } from "express";

import { TarefaRepository } from "../repository/TarefaRepository";
import { CriarTarefaService } from "../services/CriarTarefaService";
import { ListarTarefasService } from "../services/ListarTarefasService";
import { Tarefa_Model } from "../model/Tarefa";

const tarefaRota = Router()

const tarefaRepository = new TarefaRepository

tarefaRota.post("/tarefa", (req, res) => {
  const { nome, id } = req.body
  const criarTarefaService = new CriarTarefaService(tarefaRepository)
  const mensagem = criarTarefaService.execute({ nome, id })
  return res.status(200).json(mensagem)
})

tarefaRota.get("/tarefa", (req, res) => {
  const listarTarefasService = new ListarTarefasService(tarefaRepository)
  const tarefas = listarTarefasService.execute()
  return res.status(200).json(tarefas)
})

export { tarefaRota }