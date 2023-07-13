import { Request, Response } from "express";
import { diciplinaRepostory } from "../repositories/diciplinaRepostory";

export default new class DiciplinaController {

  async create(req: Request, res: Response) {
    const { nome } = req.body
    if (!nome) {
      return res.status(400).json({ error: 'Nome obrigatório' })
    }
    try {

      const novaDiciplina = diciplinaRepostory.create({
        nome
      })

      await diciplinaRepostory.save(novaDiciplina)

      console.log(novaDiciplina)

      return res.status(201).json(novaDiciplina)
    } catch (erro) {
      return res.send(500).json({ error: "Errro interno do servidor." })
    }
  }
}