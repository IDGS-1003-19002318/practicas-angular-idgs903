import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PizzeriaRoutingModule } from './pizzeria-routing.module';
import { PizzeriaComponent } from './pizzeria.component';

@NgModule({
  declarations: [
    PizzeriaComponent
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
