import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPastAppointmentComponent } from './student-past-appointment.component';

describe('StudentPastAppointmentComponent', () => {
  let component: StudentPastAppointmentComponent;
  let fixture: ComponentFixture<StudentPastAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentPastAppointmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentPastAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
