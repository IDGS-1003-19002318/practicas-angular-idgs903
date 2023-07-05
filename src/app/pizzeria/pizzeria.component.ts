import { Component, OnInit } from '@angular/core';
import { IIngrediente } from './models/Ingrediente';
import { ITamano } from './models/Tamano';
import { IPedido } from './models/Pedido';

@Component({
  selector: 'app-pizzeria',
  templateUrl: './pizzeria.component.html',
  styleUrls: ['./pizzeria.component.css']
})
export class PizzeriaComponent implements OnInit {

  pedidos: IPedido[] = [];
  detalles: any[] = [];
  total = 0;
  finalizado: boolean = false;

  pedido: IPedido = {
    id: 1,
    nombre: '',
    precio: 0,
    direccion: '',
    telefono: '',
    ingredientes: [],
    tamano: 0,
    cantidad: 0
  };

  ingredientes: IIngrediente[] = [
    { id: 1, nombre: 'Jamon', precio: 10 },
    { id: 2, nombre: 'Pina', precio: 10 },
    { id: 3, nombre: 'Champinones', precio: 10 },
  ];

  tamanos: ITamano[] = [
    { id: 1, nombre: 'Pequeña', precio: 40 },
    { id: 2, nombre: 'Mediana', precio: 80 },
    { id: 3, nombre: 'Grande', precio: 120 },
  ];

  constructor() { }

  ngOnInit() {
  }

  agregarPedido() {
    this.pedido.precio = this.pedido.cantidad * (this.tamanos[this.pedido.tamano].precio + this.getTotalIngredientes(this.pedido));
    isNaN(this.pedido.precio) ? this.pedido.precio = 0 : this.pedido.precio = this.pedido.precio;
    this.pedidos.push(this.pedido);
    this.pedido = {
      id: 1,
      nombre: '',
      precio: 0,
      direccion: '',
      telefono: '',
      ingredientes: [],
      tamano: 0,
      cantidad: 0
    };
  }

  getTotalIngredientes(pedido: IPedido) {
    let total = 0;
    pedido.ingredientes.forEach((ingrediente, index) => {
      if (ingrediente) {
        total += this.ingredientes[index - 1].precio;
      }
    });
    // console.log(`Total ingredientes : ${total}`);
    return total;
  }

  getIngredientes(pedido: IPedido) {
    let ingredientes = '';
    pedido.ingredientes.forEach((ingrediente, index) => {
      if (ingrediente) {
        ingredientes += this.ingredientes[index - 1].nombre + ', ';
      }
    });
    // console.log(`Ingredientes : ${ingredientes}`);
    return ingredientes;
  }

  terminarPedido() {
    localStorage.setItem('pedidos', JSON.stringify(this.pedidos));
    this.pedidos = [];
    this.mostrarDetalleCompra();
    this.finalizado = true;
    localStorage.removeItem('pedidos');
  }

  // mostrarDetalleCompra() {
  //   let pedidos = localStorage.getItem('pedidos')!;
  //   if (pedidos === null) {
  //     pedidos = '[]';
  //   }
  //   let pedidosJSON = JSON.parse(pedidos);
  //   let total = 0;
  //   pedidosJSON.forEach((pedido: IPedido) => {
  //     total += pedido.precio;
  //   });
  //   this.detalles = pedidosJSON;
  // }

  mostrarDetalleCompra() {
    let pedidos = localStorage.getItem('pedidos')!;
    if (pedidos === null) {
      pedidos = '[]';
    }
    let pedidosJSON = JSON.parse(pedidos) as IPedido[];
    pedidosJSON.forEach((pedido: IPedido) => {
      this.total += pedido.precio;
    });
    this.detalles = pedidosJSON;
    console.log('Detalles de pedidos:', this.detalles);
    console.log('Total:', this.total);
  }


}
