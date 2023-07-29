import { AppDataSource } from "../../../../data-source";
import { Tarefa } from '../../entities/Tarefa'
import { ITarefaDTO, ITarefaEditDTO, ITarefaRepositorio } from "../ITarefa";


class TarefaRepositorioMysql implements ITarefaRepositorio {

  private tarefas = AppDataSource.getRepository(Tarefa)

  private static INSTANCE = new TarefaRepositorioMysql

  constructor() {
    this.tarefas = AppDataSource.getRepository(Tarefa)
  }

  public static getInstance(): TarefaRepositorioMysql {
    if (!TarefaRepositorioMysql.INSTANCE)
      TarefaRepositorioMysql.INSTANCE = new TarefaRepositorioMysql
    return TarefaRepositorioMysql.INSTANCE
  }

  async listarTarefas(): Promise<Tarefa[]> {
    try {
      const tarefas = await this.tarefas.find()
      return tarefas
    } catch (error) {
      throw new Error(`Erro ao listar as tarefas!`)
    }
  }

  async listartarefaPorId(id: Number): Promise<Tarefa | string> {
    try {
      const tarefa = await this.tarefas.createQueryBuilder()
        .where("id = :id", { id: id })
        .getOne()
      if (!tarefa) {
        return (`A tarefa id ${id}, não existe no Base de dados!`)
      }
      return tarefa
    } catch (error) {
      throw new Error("Method not implemented.");
    }
  }

  async criarTarefa({ nome, descricao, dataCriacao }: ITarefaDTO): Promise<string | Tarefa> {
    try {
      const tarefa = this.tarefas.create({
        nome,
        descricao,
        dataCriacao,
        dataTermino: null,
        concluido: false
      })
      const Tarefa: Tarefa = await this.tarefas.save(tarefa)
      return Tarefa
    } catch (error) {
      throw new Error("Erro Interno No servidor!");
    }
  }

  async editarTarefa({ id, nome, descricao }: ITarefaEditDTO): Promise<string | Tarefa> {
    try {
      const tarefaExiste = await this.tarefas.createQueryBuilder()
        .where("id = :id", { id: id })
        .getOne()
      console.log(tarefaExiste)
      if (!tarefaExiste) {
        return (`Esta tarefa não existe na base de dados, id ${id}`)
      }
      const tarefaUpdate = await this.tarefas.createQueryBuilder()
        .update()
        .set({ nome, descricao })
        .where("id = :id", { id: id })
        .execute()
      const tarefa = await this.tarefas.createQueryBuilder()
        .where("id = :id", { id: id })
        .getOne()
      if (!tarefa) {
        return (`Esta tarefa não existe na base de dados, id ${id}`)
      }
      return tarefa
    } catch (error) {
      throw new Error("Method not implemented.");
    }
  }

  async deletarTarefa(id: Number): Promise<string> {
    try {
      const tarefa = await this.tarefas.createQueryBuilder()
        .where("id = :id", { id: id })
        .getOne()
      if (!tarefa) {
        return (`Esta tarefa não existe na base de dados, id ${id}`)
      }
      await this.tarefas.createQueryBuilder()
        .delete()
        .where("id = :id", { id: id })
        .execute()
      return (`Tarefa deletada com sucesso!`)
    } catch (error) {
      throw new Error("Erro interno do servidor");
    }
  }

}

export { TarefaRepositorioMysql }