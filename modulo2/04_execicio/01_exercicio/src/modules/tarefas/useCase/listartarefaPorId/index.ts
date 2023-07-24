import { tarefaRepositorio } from "../criarTarefa";
import { ListartarefaPorIdController } from "./ListartarefaPorIdController";
import { ListartarefaPorIdUseCase } from "./ListartarefaPorIdUseCase";


const listartarefaPorIdUseCase = new ListartarefaPorIdUseCase(tarefaRepositorio)
const listartarefaPorIdController = new ListartarefaPorIdController(listartarefaPorIdUseCase)

export { listartarefaPorIdController }