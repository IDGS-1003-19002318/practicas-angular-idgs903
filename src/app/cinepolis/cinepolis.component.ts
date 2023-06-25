import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent implements OnInit {

  public nombre: string = '';
  public compradores: number = 0;
  public boletos: number = 0;
  public tarjeta: boolean = false;
  public precio: number = 12;
  public precioC: number = 0;
  public total!: number;
  public mensaje: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  calcularPrecio(): void {
    let precio = 0;
    let residuo = this.boletos / 7;
    if (residuo == this.compradores || residuo < this.compradores) {
      precio = this.compraBoletos();
      this.boletos >= 5 ? precio = precio * 0.85 : this.boletos >= 3 ? precio = precio * 0.9 : precio = precio;
    } else {
      this.mensaje = 'Supero el limite de boletos por comprador';
    }
    this.tarjeta ? precio = precio * 0.9 : precio = precio;
    this.total = precio;
  }

  compraBoletos(): number {
    return this.boletos * this.precio;
  }

}
