import { TestBed } from '@angular/core/testing';

import { WhereEatService } from './where-eat.service';

describe('WhereEatService', () => {
  let service: WhereEatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WhereEatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
