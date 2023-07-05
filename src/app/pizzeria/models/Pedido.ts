import { IIngrediente } from './Ingrediente';
import { ITamano } from './Tamano';

export interface IPedido {
  id: number;
  nombre: string;
  precio: number;
  direccion: string;
  telefono: string;
  ingredientes: IIngrediente[];
  tamano: ITamano['id'];
  cantidad: number;
}
