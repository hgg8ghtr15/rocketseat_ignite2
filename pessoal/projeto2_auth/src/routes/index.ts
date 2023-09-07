import { Router } from "express"
import { usuarioRouter } from "./usuario.router"

const routers = Router()

routers.use(usuarioRouter)

export { routers }
