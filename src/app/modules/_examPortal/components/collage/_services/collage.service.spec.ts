import { TestBed } from '@angular/core/testing';

import { CollageService } from './collage.service';

describe('CollageService', () => {
  let service: CollageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CollageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
