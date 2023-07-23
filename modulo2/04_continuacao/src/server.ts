import express from 'express';

import { categoriasRoutes } from './routes/categorias.routes';
import { especificacaoRoutes } from './routes/especificacao.routes';

const app = express();

app.use(express.json());

app.use("/categoria", categoriasRoutes)
app.use("/especificacao", especificacaoRoutes)

const port = 5000;
const host = 'localhost';

app.listen(port, () => {
  console.log(`Server online em http://${host}:${port}/`);
})