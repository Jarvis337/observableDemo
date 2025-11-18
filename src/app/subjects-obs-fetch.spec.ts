import { TestBed } from '@angular/core/testing';

import { SubjectsObsFetch } from './subjects-obs-fetch';

describe('SubjectsObsFetch', () => {
  let service: SubjectsObsFetch;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubjectsObsFetch);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
