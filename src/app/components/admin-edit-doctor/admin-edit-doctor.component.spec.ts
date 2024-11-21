import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditDoctorComponent } from './admin-edit-doctor.component';

describe('AdminEditDoctorComponent', () => {
  let component: AdminEditDoctorComponent;
  let fixture: ComponentFixture<AdminEditDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminEditDoctorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminEditDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
