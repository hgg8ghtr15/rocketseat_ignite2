import { Router } from 'express'
import { criarEspecificacaoController } from '../modules/carros/UseCases/criarEspecificacao'

const especificacaoRoutes = Router()

especificacaoRoutes.post('/', (request, response) => {
  return criarEspecificacaoController.handle(request, response)
})

export { especificacaoRoutes }