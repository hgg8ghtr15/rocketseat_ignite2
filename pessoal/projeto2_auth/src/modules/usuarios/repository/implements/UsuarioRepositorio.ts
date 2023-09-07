import bcrypt from 'bcryptjs'
import jwt from "jsonwebtoken"

import { AppDataSource } from "../../../../data-source";
import { Usuario } from "../../entities/Usuario"
import { ICriarUsuario, IEditarUsuario, ITrocarSenhaUsuario, IUsuarioRepository, Ilogin } from "../IUsuario"

class UsuarioRepositorio implements IUsuarioRepository {

  private usuarios = AppDataSource.getRepository(Usuario)

  private static INSTANCE = new UsuarioRepositorio

  constructor() {
    this.usuarios = AppDataSource.getRepository(Usuario)
  }

  public static getInstance(): UsuarioRepositorio {
    if (!UsuarioRepositorio.INSTANCE) {
      UsuarioRepositorio.INSTANCE = new UsuarioRepositorio
    }
    return UsuarioRepositorio.INSTANCE
  }

  async listarUsuarios(): Promise<string | Usuario[]> {
    try {
      const usuarios = await this.usuarios.find()
      if (usuarios.length === 0) {
        return "O Sistema não possui usuários Cadastrados!"
      }
      return usuarios
    } catch (error) {
      throw new Error("Method not implemented.");
    }
  }

  async listarUsuarioID(id: Number): Promise<string | Usuario> {
    try {
      const usuario = await this.usuarios.createQueryBuilder()
        .where("id = :id", { id: id })
        .getOne()

      if (!usuario) {
        return "Usuaário não existe na base de dados!"
      }

      return usuario
    } catch (error) {
      throw new Error("Method not implemented.");
    }
  }

  async criarUsuario({ nome, email, senha }: ICriarUsuario): Promise<string | Usuario> {
    try {
      const usuarioExiste = await this.usuarios.createQueryBuilder()
        .where("email = :email", { email: email })
        .getOne()

      if (usuarioExiste) {
        return ("Email já cadastrado no sistema!")
      }

      const dataCadastro = new Date()
      const senhaHash = await bcrypt.hashSync(senha, 10)
      senha = senhaHash
      const novoUsuario = this.usuarios.create({ nome, email, senha, dataCadastro })
      const usuario: Usuario = await this.usuarios.save(novoUsuario)
      usuario.senha = ""
      return usuario
    } catch (error) {
      throw new Error("Method not implemented.");
    }
  }

  async editarUsuario({ id, nome, email }: IEditarUsuario): Promise<string | Usuario> {
    try {
      const usuarioExiste = await this.usuarios.createQueryBuilder()
        .where("id = :id", { id: id })
        .getOne()
      if (!usuarioExiste) {
        return (`Usuario não existe na base de dados!`)
      }
      const emailExiste = await this.usuarios.createQueryBuilder()
        .where("email = :email", { email: email })
        .getOne()
      if (emailExiste) {
        return (`Este email não pode ser atribuido para esse usuário.`)
      }
      const usuarioUpdate = await this.usuarios.update(id, { nome, email })
      const usuario = await this.usuarios.createQueryBuilder()
        .where("id = :id", { id: id })
        .getOne()
      if (!usuario) {
        return (`Usuario não existe na base de dados!`)
      }
      return usuario
    } catch (error) {
      throw new Error("Method not implemented.");
    }
  }

  async delatarUsuario(id: number): Promise<string> {
    try {
      const usuario = await this.usuarios.createQueryBuilder()
        .where("id = :id", { id: id })
        .getOne()
      if (!usuario) {
        return (`Usuario não existe na base de dados!`)
      }
      const usuarioDeletado = await this.usuarios.delete(usuario)
      if (usuarioDeletado.affected === 1) {
        return "Usuário deletado com sucesso!"
      }
      return "Erro ao tentar deletar Usuário!"
    } catch (error) {
      throw new Error("Method not implemented.");
    }
  }

  async trocarSenhaUsuario({ id, senha, senhaNova }: ITrocarSenhaUsuario): Promise<string | Usuario> {
    try {
      const usuario = await this.usuarios.createQueryBuilder()
        .where("id = :id", { id: id })
        .getOne()
      if (!usuario) {
        return (`Usuario não existe na base de dados!`)
      }
      const senhaValida = await bcrypt.compareSync(senha, usuario.senha)
      if (!senhaValida) {
        return (`Senha Atual esta incorreta!`)
      }
      const senhaHash = await bcrypt.hashSync(senhaNova, 10)
      const usuarioUpdate = await this.usuarios.update({ id: Number(id) }, { senha: senhaHash })
      return `Senha atualizada com sucesso!`
    } catch (error) {
      throw new Error("Method not implemented.");
    }
  }

  async login({ email, senha }: Ilogin): Promise<object | string> {
    try {
      const usuario = await this.usuarios.createQueryBuilder()
        .where("email =  :email", { email })
        .getOne()
      if (!usuario) {
        return (`Usuário não existe na base de dados!`)
      }
      const validarSenha = await bcrypt.compareSync(senha, usuario.senha)
      if (!validarSenha) {
        return (`Senha Atual esta incorreta!`)
      }

      const token = jwt.sign({ id: usuario.id }, process.env.JWT_PASS ?? "", { expiresIn: "1d" })
      console.log(token)
      usuario.senha = ""
      return { usuario, token }
    } catch (error) {
      throw new Error("Method not implemented.")
    }
  }

  async usuarioLogado(id: Number) {
    try {
      const usuario = await this.usuarios.createQueryBuilder()
        .where("id = :id", { id: id })
        .getOne()
      return usuario
    } catch (error) {
      throw new Error("Method not implemented.");
    }
  }
}

export { UsuarioRepositorio }