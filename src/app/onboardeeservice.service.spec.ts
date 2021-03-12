import { TestBed } from '@angular/core/testing';

import { OnboardeeserviceService } from './onboardeeservice.service';

describe('OnboardeeserviceService', () => {
  let service: OnboardeeserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnboardeeserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
