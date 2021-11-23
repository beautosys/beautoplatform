import { TestBed } from '@angular/core/testing';

import { AdminTeamResolver } from './admin-team.resolver';

describe('AdminTeamResolver', () => {
  let resolver: AdminTeamResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(AdminTeamResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
