import { TestBed } from '@angular/core/testing';

import { AdminContactUsService } from './admin-contact-us.service';

describe('AdminContactUsService', () => {
  let service: AdminContactUsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminContactUsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
