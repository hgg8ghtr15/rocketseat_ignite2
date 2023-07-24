import { Router } from 'express'
import { categoriasRoutes } from './categorias.routes'
import { especificacaoRoutes } from './especificacao.routes'

const routes = Router()

routes.use("/categoria", categoriasRoutes)
routes.use("/especificacao", especificacaoRoutes)

export { routes }