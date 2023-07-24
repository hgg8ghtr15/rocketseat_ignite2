
import { TarefaRepositorio } from "../../repository/Imprmentacacao/TarefaRepositorio";
import { ListartarefaPorIdController } from "./ListartarefaPorIdController";
import { ListartarefaPorIdUseCase } from "./ListartarefaPorIdUseCase";

const tarefaRepositorio = TarefaRepositorio.getInstance()
const listartarefaPorIdUseCase = new ListartarefaPorIdUseCase(tarefaRepositorio)
const listartarefaPorIdController = new ListartarefaPorIdController(listartarefaPorIdUseCase)

export { listartarefaPorIdController }