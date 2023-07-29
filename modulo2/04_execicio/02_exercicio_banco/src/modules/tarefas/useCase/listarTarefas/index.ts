import { TarefaRepositorioMysql } from "../../repository/Imprmentacacao/TarefaRepositotioMysql";
import { ListarTarefaController } from "./ListarTarefaController";
import { ListarTarefasUseCase } from "./ListarTarefasUseCase";


const tarefaRepositorioMysql = TarefaRepositorioMysql.getInstance()
const listarTarefasUseCase = new ListarTarefasUseCase(tarefaRepositorioMysql)
const listarTarefaController = new ListarTarefaController(listarTarefasUseCase)


export { listarTarefaController }