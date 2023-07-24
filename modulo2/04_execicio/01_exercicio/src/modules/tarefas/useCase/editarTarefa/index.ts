import { tarefaRepositorio } from "../criarTarefa";
import { EditarTarefaController } from "./EditarTarefaController";
import { EditarTarefaUseCase } from "./EditarTarefaUseCase";

const editarTarefaUseCase = new EditarTarefaUseCase(tarefaRepositorio)
const editarTarefaController = new EditarTarefaController(editarTarefaUseCase)

export { editarTarefaController }