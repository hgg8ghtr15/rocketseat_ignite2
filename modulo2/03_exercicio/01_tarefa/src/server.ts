import express from 'express'
import { tarefaRota } from './routes/tarefa.routers'

const app = express()

app.use(express.json())

app.use(tarefaRota)

app.get("/", (req, res) => {
  res.send("oi")
})

app.listen(5000, () => {
  console.log(`Servidor inicializado em http://localhost:5000`)
})