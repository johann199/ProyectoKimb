import { TestBed } from '@angular/core/testing';

import { BailarinService } from './bailarin.service';

describe('BailarinService', () => {
  let service: BailarinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BailarinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
