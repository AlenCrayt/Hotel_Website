import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadNotificationComponent } from './upload-notification.component';

describe('UploadNotificationComponent', () => {
  let component: UploadNotificationComponent;
  let fixture: ComponentFixture<UploadNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadNotificationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UploadNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
