import { TestBed } from '@angular/core/testing';

import { LokSabhaCreateService } from './lok-sabha-create.service';

describe('LokSabhaCreateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LokSabhaCreateService = TestBed.get(LokSabhaCreateService);
    expect(service).toBeTruthy();
  });
});
