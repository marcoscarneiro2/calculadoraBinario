import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class HistoricoService {

  // Array de strings para armazenar as operações
  operacoes: string[] = [];

  // Adiciona uma operação ao array de operações e retorna true caso tenha sido adicionada com sucesso
  adicionarOperacao(operacao: string): boolean {
    // Usa o método push() do array para adicionar a operação ao final do array
    this.operacoes.push(operacao);
    // Retorna true indicando que a operação foi adicionada com sucesso
    return true;
  }

  // Limpa o array de operações, removendo todas as operações registradas
  limparOperacoes() {
    // Atribui um novo array vazio ao array de operações, removendo todas as operações registradas
    this.operacoes = [];
  }

}

