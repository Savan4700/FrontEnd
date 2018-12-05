import { TestBed } from '@angular/core/testing';

import { CreateCustomerService } from './create-customer.service';

describe('CreateCustomerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateCustomerService = TestBed.get(CreateCustomerService);
    expect(service).toBeTruthy();
  });
});
