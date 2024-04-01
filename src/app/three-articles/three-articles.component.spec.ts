import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeArticlesComponent } from './three-articles.component';

describe('ThreeArticlesComponent', () => {
  let component: ThreeArticlesComponent;
  let fixture: ComponentFixture<ThreeArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThreeArticlesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThreeArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
