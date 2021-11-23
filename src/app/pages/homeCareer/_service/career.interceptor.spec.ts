import { TestBed } from '@angular/core/testing';

import { CareerInterceptor } from './career.interceptor';

describe('CareerInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      CareerInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: CareerInterceptor = TestBed.inject(CareerInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
