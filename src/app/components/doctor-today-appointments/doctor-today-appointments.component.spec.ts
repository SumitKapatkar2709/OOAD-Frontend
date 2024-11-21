import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorTodayAppointmentsComponent } from './doctor-today-appointments.component';

describe('DoctorTodayAppointmentsComponent', () => {
  let component: DoctorTodayAppointmentsComponent;
  let fixture: ComponentFixture<DoctorTodayAppointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoctorTodayAppointmentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorTodayAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
