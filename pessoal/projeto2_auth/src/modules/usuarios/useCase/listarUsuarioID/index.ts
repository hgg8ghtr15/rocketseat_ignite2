import { UsuarioRepositorio } from "../../repository/implements/UsuarioRepositorio"
import { ListarUsuarioIDUseCase } from "../listarUsuarioID/ListarUsuarioIDUseCase"
import { ListarUsuarioIDController } from "../listarUsuarioID/ListarUsuarioIDController"

const usuarioRepositorio = UsuarioRepositorio.getInstance()
const listarUsuarioIDUseCase = new ListarUsuarioIDUseCase(usuarioRepositorio)
const listarUsuarioIDController = new ListarUsuarioIDController(listarUsuarioIDUseCase)

export { listarUsuarioIDController }