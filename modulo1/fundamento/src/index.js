const express = require("express")

const app = express()
const porta = 5000
app.use(express.json())

let cursos = []


/**
 * router parameters =  /cursos/:id = Editar, delatar, buscar
 * query parameters =   /cursos?pagina=1&order=asc paginação
 * body parameters = creação/auteração
 */

app.get("/cursos", (req, res) => {
  console.log(req.query)
  return res.json(cursos)
})

app.post("/cursos", (req, res) => {
  let { nome } = req.body
  cursos.push(nome)
  return res.status(200).json(cursos)
})

app.put("/cursos/:id", (req, res) => {
  let { id } = req.params

  return res.status(200).json({ "mensagem": id })
})

//router parameters =  /cursos/:id = Editar, delatar, buscar
app.patch("/cursos/:id", (req, res) => {
  return res.status(200).json({ "mensagem": "patch" })
})

app.delete("/cursos/:id", (req, res) => {
  return res.status(200).json({ "mensagem": "delete" })
})

app.listen(porta, () => {
  console.log(`Servidor rodando na porta http://localhost:${porta}/`)
})