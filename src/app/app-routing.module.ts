import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'resistencias', loadChildren: () => import('./resistencias/resistencias.module').then(m => m.ResistenciasModule) },
  { path: 'distancias', loadChildren: () => import('./distancia2-puntos/distancia2-puntos.module').then(m => m.Distancia2PuntosModule) },
  { path: 'cinepolis', loadChildren: () => import('./cinepolis/cinepolis.module').then(m => m.CinepolisModule) },
  { path: '', redirectTo: 'resistencias', pathMatch: 'full' },
  { path: '**', redirectTo: 'resistencias', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
