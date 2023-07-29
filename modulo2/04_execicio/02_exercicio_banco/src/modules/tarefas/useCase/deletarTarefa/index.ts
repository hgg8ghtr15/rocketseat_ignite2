import { TarefaRepositorioMysql } from "../../repository/Imprmentacacao/TarefaRepositotioMysql";
import { DeletarTarefaController } from "./DeletarTarefaController";
import { DeletarTarefaUseCase } from "./DeletarTarefaUseCase";


const tarefaRepositorioMysql = TarefaRepositorioMysql.getInstance()
const deletarTarefaUseCase = new DeletarTarefaUseCase(tarefaRepositorioMysql)
const deletarTarefaController = new DeletarTarefaController(deletarTarefaUseCase)

export { deletarTarefaController }
