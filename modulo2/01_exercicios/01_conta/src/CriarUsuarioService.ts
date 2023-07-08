/**
 * nome
 * cpf
 * idade
 * estrato
 * saldo
 */
interface Usuario {
  nome: string;
  cpf: string;
  idade: number;
  estrato?: Estrato[];
  saldo: number;
}

interface Estrato {
  descricao: string;
  valor: number;
}

class CriarUsuarioServico {

  execute({ nome, cpf, idade, saldo = 0, estrato = [] }: Usuario) {
    console.log(nome, cpf, idade, saldo, estrato);
  }
}

export default new CriarUsuarioServico()