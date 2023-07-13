import { Request, Response } from "express";
import { videoRepository } from "../repositories/videoRepository";
import { alunoRepository } from "../repositories/alunoRepository";
import { Aluno } from "../entities/Aluno";


export default new class VideoController {

  async create(req: Request, res: Response) {
    const { titulo, url, id_aluno } = req.body

    if (!titulo) {
      return res.status(400).json({ error: " Titulo não pode ser nulo" })
    }
    if (!url) {
      return res.status(400).json({ error: " Url não pode ser nulo" })
    }
    if (!id_aluno) {
      return res.status(400).json({ error: " Aluno não pode ser nulo" })
    }

    try {
      const aluno = await alunoRepository.findOneBy({ id: Number(id_aluno) });

      const novoVideo = videoRepository.create({
        titulo,
        url,
        aluno: aluno || undefined,
      });
      await videoRepository.save(novoVideo);

      // Encontre o vídeo recém-criado pelo ID
      const video = await videoRepository.findOneBy({ id: Number(novoVideo.id) });

      return res.status(201).json(novoVideo);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao tentar cadastrar vídeo' });
    }
  }

  async update(req: Request, res: Response) {
    const { id_video } = req.body
    const { titulo, url, id_aluno } = req.body

    try {
      const video = await videoRepository.findOneBy({ id: Number(id_video) });
      if (!video) {
        return res.status(400).json({ error: 'Vídeo não encontrado' })
      }

      const aluno = await alunoRepository.findOneBy({ id: Number(id_aluno) });

      // video.aluno = aluno

      await videoRepository.update(id_video, {
        ...video,
        // aluno: [aluno || undefined]
      })
      const videoeditado = await videoRepository.findOneBy({ id: Number(id_video) });

      return res.status(200).json(videoeditado);
    }
    catch (error) {
      return res.status(400).json({ error: 'Vídeo não encontrado' });
    }
  }
}