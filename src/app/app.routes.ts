import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'calculadora',
    loadComponent: () => import('./pages/calculadora/calculadora.page').then( m => m.CalculadoraPage)
  },
  {
    path: 'historico',
    loadComponent: () => import('./pages/historico/historico.page').then( m => m.HistoricoPage)
  }
];
