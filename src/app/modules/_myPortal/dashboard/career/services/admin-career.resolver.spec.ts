import { TestBed } from '@angular/core/testing';

import { AdminCareerResolver } from './admin-career.resolver';

describe('AdminCareerResolver', () => {
  let resolver: AdminCareerResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(AdminCareerResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
