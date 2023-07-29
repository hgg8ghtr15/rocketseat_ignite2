
import { TarefaRepositorioMysql } from "../../repository/Imprmentacacao/TarefaRepositotioMysql";
import { ListartarefaPorIdController } from "./ListartarefaPorIdController";
import { ListartarefaPorIdUseCase } from "./ListartarefaPorIdUseCase";

const tarefaRepositorioMysql = TarefaRepositorioMysql.getInstance()
const listartarefaPorIdUseCase = new ListartarefaPorIdUseCase(tarefaRepositorioMysql)
const listartarefaPorIdController = new ListartarefaPorIdController(listartarefaPorIdUseCase)

export { listartarefaPorIdController }