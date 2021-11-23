import { TestBed } from '@angular/core/testing';

import { JobApplicationResolver } from './job-application.resolver';

describe('JobApplicationResolver', () => {
  let resolver: JobApplicationResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(JobApplicationResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
