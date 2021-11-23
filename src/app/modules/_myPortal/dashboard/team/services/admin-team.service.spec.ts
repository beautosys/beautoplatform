import { TestBed } from '@angular/core/testing';

import { AdminTeamService } from './admin-team.service';

describe('AdminTeamService', () => {
  let service: AdminTeamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminTeamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
