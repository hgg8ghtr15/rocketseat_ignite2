
import { UsuarioRepositorio } from '../../repository/implements/UsuarioRepositorio'
import { TrocarSenhaUsuarioController } from './TrocarSenhaUsuarioController'
import { TrocarSenhaUsuarioUseCase } from './TrocarSenhaUsuarioUseCase'

const usuarioRepositorio = UsuarioRepositorio.getInstance()
const trocarSenhaUsuarioUseCase = new TrocarSenhaUsuarioUseCase(usuarioRepositorio)
const trocarSenhaUsuarioController = new TrocarSenhaUsuarioController(trocarSenhaUsuarioUseCase)

export { trocarSenhaUsuarioController }