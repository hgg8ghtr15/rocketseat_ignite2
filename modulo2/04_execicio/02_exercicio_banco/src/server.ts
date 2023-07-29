import express from 'express'

import { AppDataSource } from './data-source'
import { routers } from './routes'


AppDataSource.initialize().then(() => {

  const app = express()

  app.use(express.json())
  app.use(routers)

  app.listen(process.env.PORT, () => {
    console.log(`Servidor inicidado em http://localhost:${process.env.PORT}`)
  })
})