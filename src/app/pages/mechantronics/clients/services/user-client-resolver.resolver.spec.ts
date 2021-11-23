import { TestBed } from '@angular/core/testing';

import { UserClientResolverResolver } from './user-client-resolver.resolver';

describe('UserClientResolverResolver', () => {
  let resolver: UserClientResolverResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(UserClientResolverResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
