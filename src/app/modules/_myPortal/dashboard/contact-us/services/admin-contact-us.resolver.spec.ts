import { TestBed } from '@angular/core/testing';

import { AdminContactUsResolver } from './admin-contact-us.resolver';

describe('AdminContactUsResolver', () => {
  let resolver: AdminContactUsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(AdminContactUsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
