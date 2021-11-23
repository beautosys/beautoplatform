import { TestBed } from '@angular/core/testing';

import { SkillToolsService } from './skill-tools.service';

describe('SkillToolsService', () => {
  let service: SkillToolsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkillToolsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
