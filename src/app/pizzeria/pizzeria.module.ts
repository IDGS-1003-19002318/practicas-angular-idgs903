import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PizzeriaRoutingModule } from './pizzeria-routing.module';
import { PizzeriaComponent } from './pizzeria.component';

@NgModule({
  declarations: [
    PizzeriaComponent
  ],
  imports: [
    CommonModule,
    PizzeriaRoutingModule
  ],
  exports: [
    PizzeriaComponent
  ]
})
export class PizzeriaModule { }
