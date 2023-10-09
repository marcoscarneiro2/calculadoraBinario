import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CalculadoraService {

  constructor() { }

  // Verifica se uma string é binária, ou seja, contém apenas 0 e 1
  isBinary(val: string) {
    // A função split() divide a string em um array de caracteres
    // A função filter() retorna um novo array contendo apenas os elementos que passam no teste da função de callback
    // A função length retorna o tamanho do array
    // Se o tamanho do array original e do filtrado forem iguais, significa que todos os caracteres eram 0 ou 1
    return val.split('').filter(x => x == "0" || x == "1").length == val.length;
  }

  // Recebe dois números binários e retorna a soma deles, também em binário
  async somar(binary1: string, binary2: string, historico: any) {

    // Verifica se os números são binários
    if (this.isBinary(binary1) && this.isBinary(binary2)) {

      // Converte os números para decimal, soma e converte o resultado de volta para binário
      const decimal1 = parseInt(binary1, 2);
      const decimal2 = parseInt(binary2, 2);
      const decimalSum = decimal1 + decimal2;
      const result = decimalSum.toString(2);

      // Monta uma string representando a operação realizada
      const operacao = `${binary1} + ${binary2} = ${result}`;

      // Adiciona a operação ao histórico
      const adicionouOperacao = historico.adicionarOperacao(operacao);
      if (!adicionouOperacao) {
        throw new Error('Erro ao adicionar a operação ao histórico');
      }

      // Retorna o resultado em binário
      return result;
    } else {
      // Se algum dos números não for binário, lança uma exceção com uma mensagem de erro
      throw new Error('Os números devem ser binários (0 ou 1)');
    }
  }

}
