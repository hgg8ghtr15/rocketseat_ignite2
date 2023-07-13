import { Router } from 'express'
import DiciplinaController from '../controllers/DiciplinaController'
import AlunoController from '../controllers/AlunoController'
import VideoController from '../controllers/VideoController'

const routes = Router()

routes.post('/diciplina', DiciplinaController.create)

routes.post('/aluno', AlunoController.create)

routes.post('/video', VideoController.create)
routes.put('/video', VideoController.update)

export default routes