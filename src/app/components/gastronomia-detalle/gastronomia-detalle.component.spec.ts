import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GastronomiaDetalleComponent } from './gastronomia-detalle.component';

describe('GastronomiaDetalleComponent', () => {
  let component: GastronomiaDetalleComponent;
  let fixture: ComponentFixture<GastronomiaDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GastronomiaDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GastronomiaDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
