/**
 * nome - string
 * duracao - number
 * instrutor - string
 */

interface Curso{
  nome: string;
  duracao?: number; 
  instrutor: string;
}

class CriarCursoServico {

  execute({duracao = 8 ,nome , instrutor}:Curso) {
    console.log(nome, duracao, instrutor)
  }
}

export default new CriarCursoServico()