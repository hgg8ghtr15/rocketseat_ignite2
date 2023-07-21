import express from 'express';
import { categoriasRoutes } from './routes/categorias.routes';

const app = express();

app.use(express.json());

app.use("/categorias", categoriasRoutes)


// app.get("/", (req, res) => {
//   const { nome } = req.body
//   console.log("Teste")
//   return res.send("Teste2")
// })



const port = 5000;
const host = 'localhost';

app.listen(port, () => {
  console.log(`Server online em http://${host}:${port}/`);
})