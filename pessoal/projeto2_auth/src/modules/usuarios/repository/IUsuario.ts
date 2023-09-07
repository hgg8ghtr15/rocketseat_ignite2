import { Usuario } from "../entities/Usuario";

interface ICriarUsuario {
  nome: string;
  email: string;
  senha: string;
}

interface IEditarUsuario {
  id: number
  nome: string;
  email: string;
}
interface ITrocarSenhaUsuario {
  id: Number
  senha: string;
  senhaNova: string;
}
interface Ilogin {
  email: string;
  senha: string;
}

interface IUsuarioRepository {
  listarUsuarios(): Promise<Usuario[] | string>
  listarUsuarioID(id: Number): Promise<Usuario | string>
  criarUsuario({ nome, email, senha }: ICriarUsuario): Promise<Usuario | string>
  editarUsuario({ id, nome, email }: IEditarUsuario): Promise<Usuario | string>
  delatarUsuario(id: Number): Promise<string>
  trocarSenhaUsuario({ id, senha, senhaNova }: ITrocarSenhaUsuario): Promise<Usuario | string>
  login({ email, senha }: Ilogin): Promise<object | string>
}

export { ICriarUsuario, IEditarUsuario, ITrocarSenhaUsuario, IUsuarioRepository, Ilogin }