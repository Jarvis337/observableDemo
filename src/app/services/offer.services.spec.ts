import { TestBed } from '@angular/core/testing';

import { OfferServices } from './offer.services';

describe('OfferServices', () => {
  let service: OfferServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfferServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
