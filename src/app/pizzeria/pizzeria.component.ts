import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray,
} from '@angular/forms';

import { IIngrediente } from './models/Ingrediente';
import { IPedido } from './models/Pedido';
import { ITamano } from './models/Tamano';

@Component({
  selector: 'app-pizzeria',
  templateUrl: './pizzeria.component.html',
  styleUrls: ['./pizzeria.component.css'],
})
export class PizzeriaComponent implements OnInit {
  pedidoForm!: FormGroup;
  ingredientesForm!: FormGroup;

  pedidos: IPedido[] = [];
  compra: any = [];
  total: number = 0;
  finalizado: boolean = false;

  pedido: IPedido = {
    id: 1,
    nombre: '',
    precio: 0,
    direccion: '',
    telefono: '',
    ingredientes: [],
    tamano: 0,
    cantidad: 0,
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
      tamano: ['', Validators.required],
      cantidad: ['', Validators.required],
      ingredientes: (this.ingredientesForm = this.fb.group({})),
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
    let { nombre, direccion, telefono, tamano, cantidad, ingredientes } =
      this.pedidoForm.value;
    this.pedido = {
      id: this.pedidos.length + 1,
      nombre,
      precio: this.calcularPrecio(ingredientes, tamano, cantidad),
      direccion,
      telefono,
      ingredientes,
      tamano,
      cantidad,
    };
    this.pedidos.push(this.pedido);
    this.pedidoForm.reset();
    this.ingredientesForm.reset();
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

  finalizar() {
    let compra = JSON.stringify(this.pedidos);
    localStorage.setItem('compra', compra);
    this.detalleCompra();
    console.log(this.compra);
    console.log(this.total);
    this.finalizado = true;
  }

  detalleCompra() {
    let compra = localStorage.getItem('compra');
    let listCompra: any = [];
    let total = 0;
    let compraJSON = JSON.parse(compra!);
    // console.log(compraJSON);
    compraJSON.forEach((pedido: IPedido) => {
      let { id, nombre, precio } = pedido;
      total += precio;
      listCompra.push({ id, nombre, precio });
    });
    this.compra = listCompra;
    this.total = total;
  }
}
