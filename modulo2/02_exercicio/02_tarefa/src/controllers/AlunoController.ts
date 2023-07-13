import { Request, Response } from "express"
import { alunoRepository } from "../repositories/alunoRepository"
import { diciplinaRepostory } from "../repositories/diciplinaRepostory"

export default new class AlunoController {

  async create(req: Request, res: Response) {
    const { nome, descricao, videos, id_diciplina } = req.body

    if (!nome) {
      return res.status(400).json({ error: 'Nome obrigatório' })
    }
    if (!descricao) {
      return res.status(404).json({ error: 'Descricao obrigatoria' })
    }
    if (!videos) {
      return res.status(404).json({ error: 'Video obrigatorio' })
    }
    if (!id_diciplina) {
      return res.status(404).json({ error: 'Diciplina obrigatoria' })
    }

    try {

      const diciplinas = await diciplinaRepostory.findOneBy({ id: Number(id_diciplina) })

      console.log(diciplinas)

      if (!diciplinas) {
        return res.status(404).json({ error: 'Diciplina não cadastrada obrigatoria' })
      }

      const novoAluno = alunoRepository.create({
        nome,
        descricao,
        videos,
        // diciplinas: diciplinas || undefined
      })

      await alunoRepository.save(novoAluno)

      return res.status(201).json(novoAluno)
    } catch (error) {
    }
  }
}