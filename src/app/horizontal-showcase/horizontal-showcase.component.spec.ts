import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalShowcaseComponent } from './horizontal-showcase.component';

describe('HorizontalShowcaseComponent', () => {
  let component: HorizontalShowcaseComponent;
  let fixture: ComponentFixture<HorizontalShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HorizontalShowcaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HorizontalShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
