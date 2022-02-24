import { TestBed } from '@angular/core/testing';

import { VisitEventService } from './visit-event.service';

describe('VisitEventService', () => {
  let service: VisitEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisitEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
