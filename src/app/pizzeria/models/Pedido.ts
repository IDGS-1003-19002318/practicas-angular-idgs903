import { IIngrediente } from './Ingrediente';
import { ITamano } from './Tamano';

export interface IPedido {
  id: number;
  nombre: string;
  precio: number;
  direccion: string;
  telefono: string;
  ingredientes: boolean[];
  tamano: ITamano['id'];
  cantidad: number;
}

export interface IPedidoForm {
  nombre: string;
  total: number;
  direccion: string;
  telefono: string;
  venta: IVenta[];
}

export interface IVenta {
  id: number;
  subtotal: number;
  ingredientes: boolean[];
  tamano: ITamano['id'];
  cantidad: number;
}
