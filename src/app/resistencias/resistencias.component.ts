import { Component, OnInit } from '@angular/core';
import { min, max } from 'rxjs/operators';
// import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-resistencias',
  templateUrl: './resistencias.component.html',
  styleUrls: ['./resistencias.component.css']
})
export class ResistenciasComponent implements OnInit {

  resistencia: any = {
    banda1: 0,
    banda2: 0,
    banda3: 0,
    tolerancia: 0,
    valor: 0,
    valorMinimo: 0,
    valorMaximo: 0
  };

  bandas: any = [
    { id: 0, nombre: 'Negro', hex: '#000000', multiplicador: 1 },
    { id: 1, nombre: 'Cafe', hex: '#8B4513', multiplicador: 10 },
    { id: 2, nombre: 'Rojo', hex: '#FF0000', multiplicador: 100 },
    { id: 3, nombre: 'Naranja', hex: '#FFA500', multiplicador: 1000 },
    { id: 4, nombre: 'Amarillo', hex: '#FFFF00', multiplicador: 10000 },
    { id: 5, nombre: 'Verde', hex: '#008000', multiplicador: 100000 },
    { id: 6, nombre: 'Azul', hex: '#0000FF', multiplicador: 1000000 },
    { id: 7, nombre: 'Violeta', hex: '#EE82EE', multiplicador: 10000000 },
    { id: 8, nombre: 'Gris', hex: '#808080', multiplicador: 100000000 },
    { id: 9, nombre: 'Blanco', hex: '#FFFFFF', multiplicador: 1000000000 },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  calcularResistencia() {
    this.resistencia.valor = parseInt(this.resistencia.banda1.toString() + this.resistencia.banda2.toString()) * this.bandas[this.resistencia.banda3].multiplicador;
    if (this.resistencia.tolerancia == 1) {
      this.resistencia.valorMinimo = this.resistencia.valor - (this.resistencia.valor * 0.05);
      this.resistencia.valorMaximo = this.resistencia.valor + (this.resistencia.valor * 0.05);
    } else if (this.resistencia.tolerancia == 2) {
      this.resistencia.valorMinimo = this.resistencia.valor - (this.resistencia.valor * 0.10);
      this.resistencia.valorMaximo = this.resistencia.valor + (this.resistencia.valor * 0.10);
    }
  }



}
