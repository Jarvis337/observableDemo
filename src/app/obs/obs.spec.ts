import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Obs } from './obs';

describe('Obs', () => {
  let component: Obs;
  let fixture: ComponentFixture<Obs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Obs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Obs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
