import { Request, Response } from 'express';
import { tarefaRepository } from '../repositorys/tarefarepository'
import { usuarioRepository } from '../repositorys/usuarioRepository';

export default new class TarefaController {
  async create(req: Request, res: Response) {
    const { nome, descricao, dataCriacao, idUsuario } = req.body
    const dataCriacaoFormatada = new Date(dataCriacao)

    try {

      const usuario = await usuarioRepository.createQueryBuilder()
        .where("id = :id", { id: Number(idUsuario) })
        .getOne()

      console.log(usuario)
      const Tarefa = await tarefaRepository.create({
        nome,
        descricao,
        dataCriacao: dataCriacaoFormatada,
        usuario: usuario || undefined
      })
      console.log(Tarefa)
      await tarefaRepository.save(Tarefa)

      return res.status(201).json({ Tarefa, message: 'Cadastro efetuado com sucesso!' })

    } catch (error) {
      console.log(error)
      return res.status(500).json({ error: 'Erro interno do servidor!' })
    }
  }

  async listarPorId(req: Request, res: Response) {
    const { id } = req.params
    try {
      console.log(id)
      const tarefa = await tarefaRepository.createQueryBuilder('tarefa')
        .where('id = :id', { id: Number(id) })
        // .andWhere('tarefa.status = :status', { status: false })
        .getOne()
      console.log(tarefa)

      if (tarefa) {
        return res.status(200).json(tarefa)
      }

      return res.status(404).json({ error: 'Tarefa não encontrada!' })

    } catch (error) {
      console.log(error)
      return res.status(500).json({ error: 'Erro interno do servidor!' })
    }
  }

  async listarTodasTarefas(req: Request, res: Response) {
    try {
      const tarefas = await tarefaRepository.find()

      if (tarefas) {
        return res.status(200).json(tarefas)
      }
      return res.status(404).json({ error: 'Tarefa não encontrada!' })

    } catch (error) {
      return res.status(500).json({ error: 'Erro interno do servidor!' })
    }
  }

  async editarTarefa(req: Request, res: Response) {
    const { id } = req.params
    const { nome, descricao } = req.body
    console.log(descricao, id, nome)
    try {
      await tarefaRepository.createQueryBuilder()
        .update()
        .set({
          nome: nome,
          descricao: descricao
        })
        .where("id = :id", { id: Number(id) })
        .execute()

      return res.status(200).json({ message: 'Atualização realizada com sucesso!' })

    } catch (error) {
      console.log(error)
      return res.status(500).json({ error: 'Erro interno do servidor!' })
    }
  }

  async deletarTarefa(req: Request, res: Response) {
    const { id } = req.params

    try {
      await tarefaRepository.createQueryBuilder()
        .delete()
        .where("id = :id", { id: Number(id) })
        .execute()
      return res.status(200).json({ message: 'Deleção realizada com sucesso!' })
    } catch (error) {
      console.log(error)
      return res.status(500).json({ error: 'Erro interno do servidor!' })
    }
  }
  
}
