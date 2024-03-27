import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcaseRowComponent } from './showcase-row.component';

describe('ShowcaseRowComponent', () => {
  let component: ShowcaseRowComponent;
  let fixture: ComponentFixture<ShowcaseRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowcaseRowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowcaseRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
