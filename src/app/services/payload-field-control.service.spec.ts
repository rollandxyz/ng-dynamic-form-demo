import { TestBed } from '@angular/core/testing';

import { PayloadFieldControlService } from './payload-field-control.service';

describe('PayloadFieldControlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PayloadFieldControlService = TestBed.get(PayloadFieldControlService);
    expect(service).toBeTruthy();
  });
});
