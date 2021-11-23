import { TestBed } from '@angular/core/testing';

import { CareerStateService } from './career-state.service';

describe('CareerStateService', () => {
  let service: CareerStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CareerStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
