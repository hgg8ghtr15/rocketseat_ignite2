
import { UsuarioRepositorio } from "../../repository/implements/UsuarioRepositorio"
import { EditarUsuarioUseCase } from "./EditarUsuarioUseCase"
import { EditarUsuarioController } from "./EditarUsuarioController"

const usuarioRepositorio = UsuarioRepositorio.getInstance()
const editarUsuarioUseCase = new EditarUsuarioUseCase(usuarioRepositorio)
const editarUsuarioController = new EditarUsuarioController(editarUsuarioUseCase)

export { editarUsuarioController }