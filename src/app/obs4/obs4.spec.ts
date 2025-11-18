import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Obs4 } from './obs4';

describe('Obs4', () => {
  let component: Obs4;
  let fixture: ComponentFixture<Obs4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Obs4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Obs4);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
