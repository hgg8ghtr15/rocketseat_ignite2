import { UsuarioRepositorio } from '../../repository/implements/UsuarioRepositorio'
import { LoginController } from './LoginController'
import { LoginUseCase } from './LoginUseCase'

const usuarioRepositorio = UsuarioRepositorio.getInstance()
const loginUseCase = new LoginUseCase(usuarioRepositorio)
const loginController = new LoginController(loginUseCase)

export { loginController }