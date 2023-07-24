import { tarefaRepositorio } from "../criarTarefa";
import { DeletarTarefaController } from "./deletarTarefaController";
import { DeletarTarefaUseCase } from "./deletarTarefaUseCase";


const deletarTarefaUseCase = new DeletarTarefaUseCase(tarefaRepositorio)
const deletarTarefaController = new DeletarTarefaController(deletarTarefaUseCase)

export { deletarTarefaController }
