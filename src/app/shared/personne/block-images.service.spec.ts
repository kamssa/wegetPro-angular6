import { TestBed, inject } from '@angular/core/testing';

import { BlockImagesService } from './block-images.service';

describe('BlockImagesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlockImagesService]
    });
  });

  it('should be created', inject([BlockImagesService], (service: BlockImagesService) => {
    expect(service).toBeTruthy();
  }));
});
