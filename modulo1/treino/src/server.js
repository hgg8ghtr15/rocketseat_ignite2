const express = require('express');

const app = express();

app.use(express.json())
const host = 'http://localhost:'
const porta = 5000

let cursos = []

app.get("/cursos", (req, res) => {
  console.log(req.query)
  return res.status(200).json(cursos)
})

app.post("/cursos", (req, res) => {
  const { nome } = req.body
  cursos.push(nome)
  return res.status(201).json(cursos)
})

app.put("/cursos/:id", (req, res) => {
  const { id } = req.params
  const { nome } = req.body

  return res.status(200).json(cursos)
})

app.delete("/cursos/:id", (req, res) => {
  const { id } = req.params
  console.log(id)
  return res.status(200).json(cursos)
})

app.patch("/cursos/:id", (req, res) => {
  const { id } = req.params
  const { nome } = req.body
  return res.status(200).json(cursos)
})

app.listen(porta, () => {
  console.log(`Servidor rodando em ${host}${porta}/`)
})