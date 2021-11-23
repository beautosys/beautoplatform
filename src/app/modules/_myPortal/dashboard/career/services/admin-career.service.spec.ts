import { TestBed } from '@angular/core/testing';

import { AdminCareerService } from './admin-career.service';

describe('AdminCareerService', () => {
  let service: AdminCareerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminCareerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
