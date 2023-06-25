import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Distancia2PuntosRoutingModule } from './distancia2-puntos-routing.module';

import { Distancia2PuntosComponent } from './distancia2-puntos.component';

@NgModule({
  declarations: [
    Distancia2PuntosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Distancia2PuntosRoutingModule
  ],
  exports: [
    Distancia2PuntosComponent
  ]
})
export class Distancia2PuntosModule { }
