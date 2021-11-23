import { TestBed } from '@angular/core/testing';

import { TeamCrudOpeService } from './team-crud-ope.service';

describe('TeamCrudOpeService', () => {
  let service: TeamCrudOpeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeamCrudOpeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
