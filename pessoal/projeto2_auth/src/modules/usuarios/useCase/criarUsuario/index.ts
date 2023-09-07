import { UsuarioRepositorio } from '../../repository/implements/UsuarioRepositorio'
import { CriarUsuarioController } from './CriarUsuarioController'
import { CriarUsuarioUseCase } from './CriarUsuarioUseCase'

const usuarioRepositorio = UsuarioRepositorio.getInstance()
const criarUsuarioUseCase = new CriarUsuarioUseCase(usuarioRepositorio)
const criarUsuarioController = new CriarUsuarioController(criarUsuarioUseCase)

export { criarUsuarioController }