import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorEditPatientDetailsComponent } from './doctor-edit-patient-details.component';

describe('DoctorEditPatientDetailsComponent', () => {
  let component: DoctorEditPatientDetailsComponent;
  let fixture: ComponentFixture<DoctorEditPatientDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoctorEditPatientDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorEditPatientDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
