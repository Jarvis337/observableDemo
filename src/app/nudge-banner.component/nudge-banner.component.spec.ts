import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NudgeBannerComponent } from './nudge-banner.component';

describe('NudgeBannerComponent', () => {
  let component: NudgeBannerComponent;
  let fixture: ComponentFixture<NudgeBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NudgeBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NudgeBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
