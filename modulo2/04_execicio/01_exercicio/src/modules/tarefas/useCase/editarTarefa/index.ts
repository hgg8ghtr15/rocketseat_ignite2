import { TarefaRepositorio } from "../../repository/Imprmentacacao/TarefaRepositorio";
import { EditarTarefaController } from "./EditarTarefaController";
import { EditarTarefaUseCase } from "./EditarTarefaUseCase";

const tarefaRepositorio = TarefaRepositorio.getInstance()
const editarTarefaUseCase = new EditarTarefaUseCase(tarefaRepositorio)
const editarTarefaController = new EditarTarefaController(editarTarefaUseCase)

export { editarTarefaController }