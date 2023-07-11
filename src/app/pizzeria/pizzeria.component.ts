import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray,
} from '@angular/forms';

import { IIngrediente } from './models/Ingrediente';
import { IPedido, IPedidoForm, IVenta } from './models/Pedido';
import { ITamano } from './models/Tamano';

@Component({
  selector: 'app-pizzeria',
  templateUrl: './pizzeria.component.html',
  styleUrls: ['./pizzeria.component.css'],
})
export class PizzeriaComponent implements OnInit {
  pedidoForm!: FormGroup;
  ingredientesForm!: FormGroup;
  ventaForm!: FormGroup;
  nombre: string = '';
  direccion: string = '';
  telefono: string = '';

  pedidos: IPedido[] = [];
  tPedidos: IPedidoForm[] = [];
  compra: any = [];
  total: number = 0;
  totalFinal: number = 0;
  finalizado: boolean = false;
  ventas: IVenta[] = [];

  pedido: IPedido = {
    id: 0,
    nombre: '',
    precio: 0,
    direccion: '',
    telefono: '',
    ingredientes: [],
    tamano: 0,
    cantidad: 0,
  };

  venta: IVenta = {
    id: 0,
    subtotal: 0,
    ingredientes: [],
    tamano: 0,
    cantidad: 0,
  }

  pedidoFormulario: IPedidoForm = {
    nombre: '',
    total: 0,
    direccion: '',
    telefono: '',
    venta: [],
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

  constructor(private fb: FormBuilder) {
    this.pedidoForm = this.fb.group({
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', Validators.required],
      venta: this.ventaForm = this.fb.group({
        tamano: ['', Validators.required],
        cantidad: ['', Validators.required],
        ingredientes: (this.ingredientesForm = this.fb.group({})),
      }),
    });

    this.ingredientes.forEach((ingrediente) => {
      this.ingredientesForm.addControl(
        ingrediente.nombre,
        new FormControl(false)
      );
    });
  }

  ngOnInit() {
    localStorage.clear();
  }

  onSubmit() {
    let { tamano, cantidad, ingredientes } = this.ventaForm.value;
    let { nombre, direccion, telefono } = this.pedidoForm.value;
    if (nombre != null || direccion != null || telefono != null) {
      this.nombre = nombre.trim();
      this.direccion = direccion.trim();
      this.telefono = telefono.trim();
    }
    this.ventas.push({
      id: this.ventas.length + 1,
      subtotal: this.calcularPrecio(ingredientes, tamano, cantidad),
      ingredientes: ingredientes,
      tamano: tamano,
      cantidad: cantidad,
    });

    // console.log(this.ventas);
    this.ventaForm.reset();
    this.pedidoForm.controls['nombre'].disable();
    this.pedidoForm.controls['direccion'].disable();
    this.pedidoForm.controls['telefono'].disable();
  }

  terminar(): void {
    let total = 0;
    this.ventas.map((venta) => {
      total += venta.subtotal;
    });
    this.pedidoFormulario = {
      nombre: this.nombre,
      total: total,
      direccion: this.direccion,
      telefono: this.telefono,
      venta: this.ventas,
    };
    // console.log(this.pedidoFormulario);
    this.tPedidos.push(this.pedidoFormulario);
    console.log(this.tPedidos);
    this.pedidoForm.reset();
    this.pedidoForm.controls['nombre'].enable();
    this.pedidoForm.controls['direccion'].enable();
    this.pedidoForm.controls['telefono'].enable();
    this.ventas = [];
    this.nombre = '';
    this.direccion = '';
    this.telefono = '';
    this.totalFinal = this.obtenerTotal();
  }

  obtenerTotal(): number {
    let total = 0;
    this.tPedidos.map((pedido) => {
      total += pedido.total;
    });
    return total;
  }


  calcularPrecio(ingredientes: any, tamano: any, cantidad: any) {
    let subtotal = 0;
    for (const ingrediente in ingredientes) {
      if (ingredientes[ingrediente]) {
        this.ingredientes.forEach((ing) => {
          if (ing.nombre === ingrediente) {
            subtotal += ing.precio;
          }
        });
      }
    }
    this.tamanos.forEach((tam) => {
      if (tam.id === tamano) {
        subtotal += tam.precio;
      }
    });
    return subtotal * cantidad;
  }

}
