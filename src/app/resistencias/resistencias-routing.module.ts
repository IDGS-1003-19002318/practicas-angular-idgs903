import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResistenciasComponent } from './resistencias.component';

// import {NonAuthGuard} from "@guards/non-auth.guard";
// import { InicioComponent } from '@modules/portal-proveedores/inicio/inicio.component';

const routes: Routes = [
  {
    path: '',
    component: ResistenciasComponent,

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
export class ResistenciasRoutingModule { }
