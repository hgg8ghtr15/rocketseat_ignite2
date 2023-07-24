import express from 'express';

import { especificacaoRoutes } from './routes/especificacao.routes';
import { routes } from './routes';

const app = express();

app.use(express.json());

app.use(routes)
app.use("/especificacao", especificacaoRoutes)

const port = 5000;
const host = 'localhost';

app.listen(port, () => {
  console.log(`Server online em http://${host}:${port}/`);
})