import { TestBed } from '@angular/core/testing';

import { AdminClientsResolver } from './admin-clients.resolver';

describe('AdminClientsResolver', () => {
  let resolver: AdminClientsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(AdminClientsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
