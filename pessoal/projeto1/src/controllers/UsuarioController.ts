import { Request, Response } from 'express'
import { usuarioRepository } from '../repositorys/usuarioRepository'

export default new class UsuarioRepository {

  async createUsuario(req: Request, res: Response) {
    const { nome, email, senha } = req.body;
    try {
      const usuario = await usuarioRepository.create({ nome, email, senha });
      await usuarioRepository.save(usuario)
      console.log(usuario);
      return res.status(201).json({ usuario, message: 'Cadastro efetuado com sucesso!' });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: 'Erro interno do servidor!' });
    }
  }

  async editarUsuario(req: Request, res: Response) {
    const { id } = req.params
    const { nome, email } = req.body
    try {
      const usuario = await usuarioRepository.createQueryBuilder()
        .update()
        .set({ nome, email })
        .where("id = :id", { id: id })
        .execute()
      if (usuario.affected === 0) {
        return res.status(200).json({ mensagem: "Usuario não encontrado!" })
      }
      return res.status(200).json({ mensagem: "Dados atualizado com sucesso!" })
    } catch (error) {
      return res.status(500).json({ error: "Erro interno do servidor" })
    }
  }

  async buscarUsurioId(req: Request, res: Response) {
    const { id } = req.params
    try {
      const usuario = await usuarioRepository.createQueryBuilder()
        .where("id = :id", { id: id }).getOne()
      if (!usuario) {
        return res.status(404).json({ error: "Usuario não encontrado!" })
      }
      return res.status(200).json(usuario)
    } catch (error) {
      return res.status(500).json({ error: "Erro interno do servidor" })
    }
  }

  async buscarTodosUsuarios(req: Request, res: Response) {
    try {
      const usuarios = await usuarioRepository.find()
      if (!usuarios) {
        return res.status(200).json({ error: "Não existe usuarios!" })
      }
      return res.status(200).json(usuarios)
    } catch (error) {
      return res.status(500).json({ error: "Erro interno do servidor" })
    }
  }

  async deletarUsuario(req: Request, res: Response) {
    const { id } = req.params
    try {
      const usuario = await usuarioRepository.createQueryBuilder()
        .delete()
        .where("id = :id", { id: id })
        .execute()
      if (usuario.affected === 0) {
        return res.status(200).json({ mensagem: "Usuario não encontrado!" })
      }
      return res.status(200).json({ mensagem: "Usuario deletado com sucesso!" })
    } catch (error) {
      console.log(error)
      return res.status(404).json({ error: "Error interno do servidor" })
    }
  }
}


// @PrimaryGeneratedColumn()
//   id: string;
//   nome: string;
//   email: string;
//   senha: string;
//   dataCadastro: Date
// id_tarefa
