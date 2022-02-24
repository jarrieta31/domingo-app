import { TestBed } from '@angular/core/testing';

import { WhereSleepService } from './where-sleep.service';

describe('WhereSleepService', () => {
  let service: WhereSleepService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WhereSleepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
