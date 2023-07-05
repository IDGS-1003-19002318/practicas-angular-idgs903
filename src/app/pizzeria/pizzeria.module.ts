import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PizzeriaRoutingModule } from './pizzeria-routing.module';
import { PizzeriaComponent } from './pizzeria.component';
import { IngredientesPipe } from './ingredientes.pipe';

@NgModule({
  declarations: [
    PizzeriaComponent,
    IngredientesPipe
  ],
  imports: [
    CommonModule,
    PizzeriaRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  exports: [
    PizzeriaComponent
  ]
})
export class PizzeriaModule { }
