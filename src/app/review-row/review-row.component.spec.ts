import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewRowComponent } from './review-row.component';

describe('ReviewRowComponent', () => {
  let component: ReviewRowComponent;
  let fixture: ComponentFixture<ReviewRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewRowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReviewRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
