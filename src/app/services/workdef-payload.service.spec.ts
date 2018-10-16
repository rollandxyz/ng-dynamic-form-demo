import { TestBed } from '@angular/core/testing';

import { WorkdefPayloadService } from './workdef-payload.service';

describe('WorkdefPayloadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WorkdefPayloadService = TestBed.get(WorkdefPayloadService);
    expect(service).toBeTruthy();
  });
});
