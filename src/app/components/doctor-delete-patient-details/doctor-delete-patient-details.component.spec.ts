import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorDeletePatientDetailsComponent } from './doctor-delete-patient-details.component';

describe('DoctorDeletePatientDetailsComponent', () => {
  let component: DoctorDeletePatientDetailsComponent;
  let fixture: ComponentFixture<DoctorDeletePatientDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoctorDeletePatientDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorDeletePatientDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
