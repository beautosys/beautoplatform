import { TestBed } from '@angular/core/testing';

import { CollageResolver } from './collage.resolver';

describe('CollageResolver', () => {
  let resolver: CollageResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CollageResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
