import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditMainDoctorComponent } from './admin-edit-main-doctor.component';

describe('AdminEditMainDoctorComponent', () => {
  let component: AdminEditMainDoctorComponent;
  let fixture: ComponentFixture<AdminEditMainDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminEditMainDoctorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminEditMainDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
