import express from 'express'
import { tarefaRouter } from './routers/tarefa.routes'
const app = express()

app.use(express.json())

app.use("/tarefa", tarefaRouter)

app.get("/", (req, res) => {
  return res.send("Hello")
})



const port = 5000
const host = 'localhost'
app.listen(port, () => {
  console.log(`Servidor online em http://${host}:${port}/`)
})