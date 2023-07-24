import express from 'express'

import { routers } from './routes'

const app = express()

app.use(express.json())


app.use(routers)

const port = 5000

app.listen(port, () => {
  console.log(`Servidor inicidado em http://localhost:${port}`)
})