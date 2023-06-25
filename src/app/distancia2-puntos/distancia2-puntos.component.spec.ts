import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Distancia2PuntosComponent } from './distancia2-puntos.component';

describe('Distancia2PuntosComponent', () => {
  let component: Distancia2PuntosComponent;
  let fixture: ComponentFixture<Distancia2PuntosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Distancia2PuntosComponent]
    });
    fixture = TestBed.createComponent(Distancia2PuntosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
