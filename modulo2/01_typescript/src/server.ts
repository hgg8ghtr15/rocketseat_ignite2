import exepress from 'express'
import { criarCurso } from './rotas'

const app = exepress()

const port = 5000

/**
 *  Middleware
 */

app.use(exepress.json())

/**
 *  Route
 */

app.get('/', criarCurso)

app.listen(port, () => {
  console.log(`servidor iniciado em http://localhost:${port}/`)
})