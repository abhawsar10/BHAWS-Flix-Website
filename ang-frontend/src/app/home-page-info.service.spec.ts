import { TestBed } from '@angular/core/testing';

import { HomePageInfoService } from './home-page-info.service';

describe('HomePageInfoService', () => {
  let service: HomePageInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomePageInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
