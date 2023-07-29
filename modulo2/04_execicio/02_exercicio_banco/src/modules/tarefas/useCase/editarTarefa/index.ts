import { TarefaRepositorioMysql } from "../../repository/Imprmentacacao/TarefaRepositotioMysql";
import { EditarTarefaController } from "./EditarTarefaController";
import { EditarTarefaUseCase } from "./EditarTarefaUseCase";

const tarefaRepositorioMysql = TarefaRepositorioMysql.getInstance()
const editarTarefaUseCase = new EditarTarefaUseCase(tarefaRepositorioMysql)
const editarTarefaController = new EditarTarefaController(editarTarefaUseCase)

export { editarTarefaController }