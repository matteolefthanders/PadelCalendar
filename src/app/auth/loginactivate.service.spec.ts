import { TestBed } from '@angular/core/testing';

import { LoginactivateService } from './loginactivate.service';

describe('LoginactivateService', () => {
  let service: LoginactivateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginactivateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
