import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ResistenciasComponent } from './resistencias.component';

import { ResistenciasRoutingModule } from './resistencias-routing.module';

@NgModule({
  declarations: [
    ResistenciasComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgOptimizedImage,
    ResistenciasRoutingModule,
  ],
  exports: [
    ResistenciasComponent
  ]
})
export class ResistenciasModule { }
