import express from 'express';
import { criarUsuario } from './rotas';
const app = express();

app.use(express.json());

const port = 5000
const host = 'localhost'

app.post('/usuario', criarUsuario)

app.listen(port, () => {
  console.log(`servidor online em http://${host}:${port}/`)
})