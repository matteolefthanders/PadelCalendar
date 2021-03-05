import { TestBed } from '@angular/core/testing';

import { ErrormatcherService } from './errormatcher.service';

describe('ErrormatcherService', () => {
  let service: ErrormatcherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrormatcherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
