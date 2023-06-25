import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Distancia2PuntosComponent } from './distancia2-puntos.component';


const routes: Routes = [
  {
    path: '',
    component: Distancia2PuntosComponent,

  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Distancia2PuntosRoutingModule { }
