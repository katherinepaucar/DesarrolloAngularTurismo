import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuseoDetalleComponent } from './museo-detalle.component';

describe('MuseoDetalleComponent', () => {
  let component: MuseoDetalleComponent;
  let fixture: ComponentFixture<MuseoDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuseoDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MuseoDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
