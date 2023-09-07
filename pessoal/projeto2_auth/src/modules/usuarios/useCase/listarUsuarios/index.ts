import { UsuarioRepositorio } from "../../repository/implements/UsuarioRepositorio";
import { ListarUsuariosController } from "./ListarUsuariosController";
import { ListarUsuariosUseCase } from "./ListarUsuariosUseCase"

const usuarioRepositorio = UsuarioRepositorio.getInstance()
const listarUsuariosUseCase = new ListarUsuariosUseCase(usuarioRepositorio)
const listarUsuariosController = new ListarUsuariosController(listarUsuariosUseCase)

export { listarUsuariosController }
