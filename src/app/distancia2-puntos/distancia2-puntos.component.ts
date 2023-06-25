import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-distancia2-puntos',
  templateUrl: './distancia2-puntos.component.html',
  styleUrls: ['./distancia2-puntos.component.css']
})
export class Distancia2PuntosComponent implements OnInit {
  public distanciaForm!: FormGroup;
  public distancia!: number;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.distanciaForm = new FormGroup({
      punto1: new FormGroup({
        x: new FormControl(0, [Validators.required, Validators.min(-100), Validators.max(100)]),
        y: new FormControl(0, [Validators.required, Validators.min(-100), Validators.max(100)])
      }),
      punto2: new FormGroup({
        x: new FormControl(0, [Validators.required, Validators.min(-100), Validators.max(100)]),
        y: new FormControl(0, [Validators.required, Validators.min(-100), Validators.max(100)])
      })
    });
  }

  public calcularDistancia(): void {
    if (this.distanciaForm.valid) {
      console.log('Formulario válido');
      const distancias = this.distanciaForm.value;
      const x1 = distancias.punto1.x;
      const y1 = distancias.punto1.y;
      const x2 = distancias.punto2.x;
      const y2 = distancias.punto2.y;
      // const distancia = { 'distancia': Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)) };
      this.distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
      // this.router.navigate(['/distancias', distancia]);
    } else {
      console.error('Formulario inválido');
    }
  }
}
