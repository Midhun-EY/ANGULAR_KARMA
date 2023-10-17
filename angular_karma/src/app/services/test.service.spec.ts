import { TestBed } from '@angular/core/testing';

import { TestService } from './test.service';

describe('TutorialService', () => {
  let service: TestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('sampleFunction should be return true', () => {
    expect(service.sampleFunction).toBeTrue;
  });

  it('sampleFunction2 should be return false', () => {
    expect(service.sampleFunction2).toBeFalse;
  });

});
