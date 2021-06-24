import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UbicacionRutaComponent } from './ubicacion-ruta.component';

describe('UbicacionRutaComponent', () => {
  let component: UbicacionRutaComponent;
  let fixture: ComponentFixture<UbicacionRutaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UbicacionRutaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UbicacionRutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
