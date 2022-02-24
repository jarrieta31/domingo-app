import { TestBed } from '@angular/core/testing';

import { VisitPlaceService } from './visit-place.service';

describe('VisitPlaceService', () => {
  let service: VisitPlaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisitPlaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
