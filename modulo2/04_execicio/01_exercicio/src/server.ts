import express from 'express'

import { tarefaRouter } from './routes/tarefa.routes'

const app = express()

app.use(express.json())


app.use(tarefaRouter)

const port = 5000

app.listen(port, () => {
  console.log(`Servidor inicidado em http://localhost:${port}`)
})