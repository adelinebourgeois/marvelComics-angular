/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MarvelService } from './marvel.service';

describe('MarvelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MarvelService]
    });
  });

  it('should ...', inject([MarvelService], (service: MarvelService) => {
    expect(service).toBeTruthy();
  }));
});
