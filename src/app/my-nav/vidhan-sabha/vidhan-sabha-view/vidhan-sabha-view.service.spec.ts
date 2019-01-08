import { TestBed } from '@angular/core/testing';

import { VidhanSabhaViewService } from './vidhan-sabha-view.service';

describe('VidhanSabhaViewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VidhanSabhaViewService = TestBed.get(VidhanSabhaViewService);
    expect(service).toBeTruthy();
  });
});
