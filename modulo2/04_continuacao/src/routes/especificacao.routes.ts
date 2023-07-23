import { Router } from 'express'
import { EspecificacaoRepository } from '../modules/carros/respositories/EspecificacaoRepository'
import { CriarEspecificacaoService } from '../modules/carros/services/CriarEspecificacaoService'

const especificacaoRoutes = Router()
const repositorioEspecificacao = new EspecificacaoRepository

especificacaoRoutes.post('/', (request, response) => {
  const { nome, descricao } = request.body
  const criarEspecificacaoService = new CriarEspecificacaoService(repositorioEspecificacao)
  criarEspecificacaoService.execute({ nome, descricao })
  return response.status(201).send("success")
})

export { especificacaoRoutes }