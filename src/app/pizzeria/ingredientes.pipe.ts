import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ingredientesPipe'
})
export class IngredientesPipe implements PipeTransform {

  transform(value: any, ingredientes: any[]): any {
    let listaIngredientes = [];
    for (const ingrediente in ingredientes) {
      if (ingredientes[ingrediente]) {
        listaIngredientes.push(ingrediente);
      }
    }
    return listaIngredientes.toString().replace(/,/g, ', ');
  }

}
