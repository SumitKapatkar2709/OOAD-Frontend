import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorAddPatientDetailsComponent } from './doctor-add-patient-details.component';

describe('DoctorAddPatientDetailsComponent', () => {
  let component: DoctorAddPatientDetailsComponent;
  let fixture: ComponentFixture<DoctorAddPatientDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoctorAddPatientDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorAddPatientDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
