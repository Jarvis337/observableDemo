import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsFetchData } from './obs-fetch-data';

describe('ObsFetchData', () => {
  let component: ObsFetchData;
  let fixture: ComponentFixture<ObsFetchData>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObsFetchData]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObsFetchData);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
