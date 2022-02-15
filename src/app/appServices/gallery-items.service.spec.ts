import { TestBed } from '@angular/core/testing';

import { GalleryItemsService } from './gallery-items.service';

describe('GalleryItemsService', () => {
  let service: GalleryItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GalleryItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
