import { TarefaRepositorio } from "../../repository/TarefaRepositorio";
import { ListarTarefaController } from "./ListarTarefaController";
import { ListarTarefasUseCase } from "./ListarTarefasUseCase";
import { tarefaRepositorio } from "../criarTarefa"

// const tarefaRepositorio = new TarefaRepositorio()

const listarTarefasUseCase = new ListarTarefasUseCase(tarefaRepositorio)
const listarTarefaController = new ListarTarefaController(listarTarefasUseCase)


export { listarTarefaController }