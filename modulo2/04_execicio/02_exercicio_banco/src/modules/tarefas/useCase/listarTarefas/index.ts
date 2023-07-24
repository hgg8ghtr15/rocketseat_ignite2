import { TarefaRepositorio } from "../../repository/Imprmentacacao/TarefaRepositorio";
import { ListarTarefaController } from "./ListarTarefaController";
import { ListarTarefasUseCase } from "./ListarTarefasUseCase";


const tarefaRepositorio = TarefaRepositorio.getInstance()
const listarTarefasUseCase = new ListarTarefasUseCase(tarefaRepositorio)
const listarTarefaController = new ListarTarefaController(listarTarefasUseCase)


export { listarTarefaController }