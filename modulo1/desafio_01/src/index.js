const express = require('express')
const { v4: uuidv4 } = require("uuid")
const app = express()
const localhost = "localhost"
const port = 5000

const usuarios = []

/**
 *  middleware
 */
app.use(express.json())

function usuarioExiste(req, res, next) {
  const { username } = req.headers

  const usuario = usuarios.find((usuario) => {
    return usuario.username === username
  })
  console.log(usuario)
  if (!usuario) {
    return res.status(400).json({ error: 'Usuário não cadastrado', username: username })
  }

  req.usuario = usuario
  return next()
}

function todoExiste(req, res, next) {
  const { usuario } = req
  console.log(usuario)
  const { id } = req.params
  console.log(id)
  const idvalido = usuario.todos.some((todo) => {
    return todo.id === id
  })

  if (!idvalido) {
    return res.status(404).json({ mensage: "Tarefa não encontrada" })
  }

  const todo = usuario.todos.find((todo) => {
    return todo.id === id
  })

  req.todo = todo
  return next()
}

/**
 *  Crud usuário
 */
app.get('/usuarios', (req, res) => {
  return res.status(200).json(usuarios)
  // return res.status(200).send("Dados listado com sucesso")
})

app.post('/usuario', (req, res) => {
  const { name, username } = req.body

  const usuarioExiste = usuarios.some((usuario) => {
    return usuario.username === username
  })

  console.log(usuarioExiste)
  if (usuarioExiste) {
    return res.status(400).json({ error: 'Usuário já cadastrado', username: username })
  }
  const usuario = {
    id: uuidv4(),
    name,
    username,
    dataCriacao: new Date(),
    dataEdicao: null,
    todos: [],
  }

  usuarios.push(usuario)
  return res.status(201).json(usuario)
})

app.get('/usuario', usuarioExiste, (req, res) => {
  const { usuario } = req
  return res.status(200).json(usuario)
})

app.put('/usuario', usuarioExiste, (req, res) => {
  const { usuario } = req
  const { name } = req.body
  if (!name) {
    return res.status(200).json("Nome deve estar preenchido!")
  }
  usuario.name = name
  usuario.dataEdicao = new Date()
  return res.status(200).json({ usuario, mensagem: "usuario Atualziado com sucesso" })
})

/**
 *  Crud todos
*/
app.post('/usuario/todo', usuarioExiste, (req, res) => {
  const { usuario } = req
  const { titulo, dataTermino } = req.body
  const dataTerminoFormatada = new Date(dataTermino + " 00:00")
  const toda = {
    id: uuidv4(),
    titulo,
    concluida: false,
    dataCriacao: new Date(),
    dataTermino: dataTerminoFormatada
  }

  usuario.todos.push(toda)
  return res.status(201).json({ usuario, toda })
})

app.put('/usuario/todo/:id', usuarioExiste, todoExiste, (req, res) => {
  const { todo } = req
  const { titulo, dataTermino } = req.body
  const dataTerminoFormatada = new Date(dataTermino + " 00:00")

  todo.titulo = titulo
  todo.dataTermino = new Date(dataTerminoFormatada)
  return res.status(200).json(todo)
})

app.delete('/usuario/todo/:id', usuarioExiste, todoExiste, (req, res) => {
  const { usuario, todo } = req
  usuario.todos.splice(usuario.todos.indexOf(todo), 1)
  return res.status(200).json(usuario)
})

app.patch("/usuario/todo/:id/done", usuarioExiste, todoExiste, (req, res) => {
  const { todo } = req
  todo.concluida = true
  return res.status(200).json(todo)
})

app.listen(port, () => {
  console.log(`Server executando e, http://${localhost}:${port}/`)
})