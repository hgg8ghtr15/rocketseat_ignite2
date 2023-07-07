const express = require('express')
const { v4: uuidv4 } = require('uuid')
const app = express()

app.use(express.json())
const host = "http://localhost:"
const port = 5000

const contas = []

//middleware

function verificaSeUsuarioExiste(req, res, next) {
  const { cpf } = req.headers
  console.log(cpf)
  const cliente = contas.find((conta) => {
    return conta.cpf === cpf
  })

  if (!cliente) {
    return res.status(400).json({ erro: "CPF não cadastrado" })
  }
  req.cliente = cliente

  return next()
}


app.post("/conta", (req, res) => {
  const { cpf, nome } = req.body
  const validaCliente = contas.some((conta) => {
    return conta.cpf === cpf
  })
  console.log(validaCliente)

  if (validaCliente) {
    return res.status(400).json({ erro: "CPF já cadastrado" })
  }

  contas.push({
    nome: nome,
    cpf: cpf,
    id: uuidv4(),
    saldo: 0,
    estrato: []
  })

  return res.status(201).json(contas)
})

//app.use(verificaSeUsuarioExiste)//forma global

app.get('/estrato', verificaSeUsuarioExiste, (req, res) => {
  const { cliente } = req

  console.log(cliente.estrato)
  return res.status(200).send(cliente)
})

app.get('/estrato/data', verificaSeUsuarioExiste, (req, res) => {
  const { cliente } = req
  let { data } = req.query
  const dataFormatada = new Date(data + ' 00:00')
  const estrato = cliente.estrato.filter((estrato) => {
    return estrato.data >= dataFormatada
  })
  return res.status(200).json(estrato)
})

app.post('/deposito', verificaSeUsuarioExiste, (req, res) => {
  const { cliente } = req
  const { valor, descricao } = req.body
  cliente.saldo += valor
  cliente.estrato.push({
    data: new Date(),
    valor: valor,
    tipo: "Credito",
    descricao: descricao
  })
  return res.status(201).json(cliente)
})

app.post('/sacar', verificaSeUsuarioExiste, (req, res) => {
  const { cliente } = req
  const { valor, descricao } = req.body

  if (cliente.saldo < valor) {
    return res.status(400).json({ erro: "Saldo insuficiente" })
  }
  cliente.saldo -= valor
  cliente.estrato.push({
    data: new Date(),
    valor: -valor,
    tipo: "Debito",
    descricao: descricao
  })
  return res.status(200).json(cliente)
})

app.delete("/conta/deletar", verificaSeUsuarioExiste, (req, res) => {
  const { cliente } = req
  contas.splice(contas.indexOf(cliente), 1)
  return res.status(204).send("Cliente deletado com sucesso!")
})

app.put("/conta/atualizar", verificaSeUsuarioExiste, function (req, res) {
  const { cliente } = req
  const { nome } = req.body

  if (!nome) {
    return res.status(400).json({ erro: "Nome não informado" })
  }

  cliente.nome = nome
  return res.status(202).json(cliente)
})

app.listen(port, () => {
  console.log(`servidor online em ${host}${port}/`)
})
