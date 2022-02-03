import { TestBed } from '@angular/core/testing';

import { CusloginService } from './cuslogin.service';

describe('CusloginsService', () => {
  let service: CusloginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CusloginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
