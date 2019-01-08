import { TestBed } from '@angular/core/testing';

import { VidhanSabhaCreateService } from './vidhan-sabha-create.service';

describe('VidhanSabhaCreateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VidhanSabhaCreateService = TestBed.get(VidhanSabhaCreateService);
    expect(service).toBeTruthy();
  });
});
