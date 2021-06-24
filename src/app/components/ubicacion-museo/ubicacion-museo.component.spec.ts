import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UbicacionMuseoComponent } from './ubicacion-museo.component';

describe('UbicacionMuseoComponent', () => {
  let component: UbicacionMuseoComponent;
  let fixture: ComponentFixture<UbicacionMuseoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UbicacionMuseoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UbicacionMuseoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
