import { TarefaRepositorio } from "../../repository/Imprmentacacao/TarefaRepositorio";
import { DeletarTarefaController } from "./DeletarTarefaController";
import { DeletarTarefaUseCase } from "./deletarTarefaUseCase";

const tarefaRepositorio = TarefaRepositorio.getInstance()
const deletarTarefaUseCase = new DeletarTarefaUseCase(tarefaRepositorio)
const deletarTarefaController = new DeletarTarefaController(deletarTarefaUseCase)

export { deletarTarefaController }
