import { TestBed } from '@angular/core/testing';

import { GastroService } from './gastro.service';

describe('GastroService', () => {
  let service: GastroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GastroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
