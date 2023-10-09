import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { HistoricoService } from '../../services/historico.service';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.page.html',
  styleUrls: ['./historico.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})

export class HistoricoPage implements OnInit {

  operacoes: string[] = [];

  constructor(private historicoService: HistoricoService) { }

  ngOnInit() {
    this.operacoes = this.historicoService.operacoes;
  }

  limparOperacoes() {
    this.historicoService.limparOperacoes();
    this.operacoes = [];
  }

}
