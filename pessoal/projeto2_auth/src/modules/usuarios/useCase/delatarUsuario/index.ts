import { UsuarioRepositorio } from "../../repository/implements/UsuarioRepositorio";
import { DelatarUsuarioController } from "./DelatarUsuarioController";
import { DelatarUsuarioUseCase } from "./DelatarUsuarioUseCase";

const usuarioRepositorio = UsuarioRepositorio.getInstance()
const delatarUsuarioUseCase = new DelatarUsuarioUseCase(usuarioRepositorio)
const delatarUsuarioController = new DelatarUsuarioController(delatarUsuarioUseCase)

export { delatarUsuarioController }
