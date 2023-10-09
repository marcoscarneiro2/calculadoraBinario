import { Component, OnInit } from '@angular/core';
import { AlertController, IonicModule } from '@ionic/angular';
import { CalculadoraService } from '../../services/calculadora.service';
import { HistoricoService } from 'src/app/services/historico.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.page.html',
  styleUrls: ['./calculadora.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
})

export class CalculadoraPage implements OnInit {

  binary1 = ''; // Variável para armazenar o primeiro número binário
  binary2 = ''; // Variável para armazenar o segundo número binário
  result = ''; // Variável para armazenar o resultado da soma

  constructor(public alertController: AlertController, private calculadoraService: CalculadoraService, private historicoService: HistoricoService) { }

  ngOnInit() {
    // Método executado quando a página é carregada
  }

  async somar() {
    try {
      // Tenta realizar a soma usando o serviço de calculadora
      // O resultado é armazenado na variável 'result'
      this.result = await this.calculadoraService.somar(this.binary1, this.binary2, this.historicoService);
    } catch (error: any) {
      // Se houver um erro, exibe uma mensagem de alerta
      const alert = await this.alertController.create({
        header: 'Erro',
        message: error.message,
        buttons: ['OK']
      });
      await alert.present();
    }
  }

}