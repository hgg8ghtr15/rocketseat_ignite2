import express from 'express';

import { AppDataSource } from './data-source'
import { routers } from "./routes/"

AppDataSource.initialize().then(() => {
  const app = express();

  app.use(express.json())

  app.use(routers)

  app.get("/", (req, res) => {
    res.send("Hello World!");
  })
  return app.listen(process.env.SERVER_PORT, () => {
    console.log(`Servidor online em http://localhost:${process.env.SERVER_PORT}/`)
  })

})