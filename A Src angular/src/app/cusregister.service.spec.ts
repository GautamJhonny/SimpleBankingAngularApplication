import { TestBed } from '@angular/core/testing';

import { CusregisterService } from './cusregister.service';

describe('CusserviceService', () => {
  let service: CusregisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CusregisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
