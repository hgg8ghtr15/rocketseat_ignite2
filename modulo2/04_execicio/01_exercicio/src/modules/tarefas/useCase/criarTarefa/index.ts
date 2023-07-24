import { TarefaRepositorio } from "../../repository/Imprmentacacao/TarefaRepositorio";
import { CriarTarefaController } from "./CriarTarefaController";
import { CriarTarefaUseCase } from "./CriarTarefaUseCase";


const tarefaRepositorio = TarefaRepositorio.getInstance()

const criarTarefaUseCase = new CriarTarefaUseCase(tarefaRepositorio)
const criarTarefaController = new CriarTarefaController(criarTarefaUseCase)

export { criarTarefaController, tarefaRepositorio }