import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuseosComponent } from './museos.component';

describe('MuseosComponent', () => {
  let component: MuseosComponent;
  let fixture: ComponentFixture<MuseosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuseosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MuseosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
