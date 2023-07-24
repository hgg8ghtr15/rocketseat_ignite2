import { TarefaRepositorio } from "../../repository/TarefaRepositorio";
import { CriarTarefaController } from "./CriarTarefaController";
import { CriarTarefaUseCase } from "./CriarTarefaUseCase";


const tarefaRepositorio = new TarefaRepositorio()

const criarTarefaUseCase = new CriarTarefaUseCase(tarefaRepositorio)
const criarTarefaController = new CriarTarefaController(criarTarefaUseCase)

export { criarTarefaController, tarefaRepositorio }