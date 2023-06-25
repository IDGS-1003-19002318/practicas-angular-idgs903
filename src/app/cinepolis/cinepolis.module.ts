import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CinepolisComponent } from './cinepolis.component';
import { CinepolisRoutingModule } from './cinepolis-routing.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    CinepolisComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    CinepolisRoutingModule
  ],
  exports: [
    CinepolisComponent
  ]
})
export class CinepolisModule { }
