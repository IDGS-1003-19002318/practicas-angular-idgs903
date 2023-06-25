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
    // { color: "Seleccione una banda", valor: -1, hex: "#FFFFFF" },
    { nombre: "Negro", id: 0, hex: "#000000" },
    { nombre: "brown", id: 1, hex: "#8B4513" },
    { nombre: "red", id: 2, hex: "#FF0000" },
    { nombre: "orange", id: 3, hex: "#FFA500" },
    { nombre: "yellow", id: 4, hex: "#FFFF00" },
    { nombre: "green", id: 5, hex: "#008000" },
    { nombre: "blue", id: 6, hex: "#0000FF" },
    { nombre: "violet", id: 7, hex: "#EE82EE" },
    { nombre: "gray", id: 8, hex: "#808080" },
    { nombre: "white", id: 9, hex: "#FFFFFF" },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  calcularResistencia() {
    this.resistencia.valor = this.resistencia.banda1 * 10 + this.resistencia.banda2 * 10 ** this.resistencia.banda3;
    if (this.resistencia.tolerancia == 1) {
      this.resistencia.valorMinimo = this.resistencia.valor - (this.resistencia.valor * 0.05);
      this.resistencia.valorMaximo = this.resistencia.valor + (this.resistencia.valor * 0.05);
    } else if (this.resistencia.tolerancia == 2) {
      this.resistencia.valorMinimo = this.resistencia.valor - (this.resistencia.valor * 0.10);
      this.resistencia.valorMaximo = this.resistencia.valor + (this.resistencia.valor * 0.10);
    }
  }



}
