import { TestBed, inject } from '@angular/core/testing';

import { LoaderBlockService } from './loader-block.service';

describe('LoaderBlockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoaderBlockService]
    });
  });

  it('should ...', inject([LoaderBlockService], (service: LoaderBlockService) => {
    expect(service).toBeTruthy();
  }));
});
