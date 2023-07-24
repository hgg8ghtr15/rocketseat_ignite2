import { EspecificacaoRepository } from "../../respositories/implementacaoes/EspecificacaoRepository";
import { CriarEspecificacaoController } from "./CriarEspecificacaoController";
import { CriarEspecificacaoUseCase } from "./CriarEspecificacaoUseCase";



const especificacaoRepository = EspecificacaoRepository.getInstance()
const criarEspecificacaoUseCase = new CriarEspecificacaoUseCase(especificacaoRepository)
const criarEspecificacaoController = new CriarEspecificacaoController(criarEspecificacaoUseCase)

export { criarEspecificacaoController }