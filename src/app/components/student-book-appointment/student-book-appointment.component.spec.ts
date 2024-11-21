import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentBookAppointmentComponent } from './student-book-appointment.component';

describe('StudentBookAppointmentComponent', () => {
  let component: StudentBookAppointmentComponent;
  let fixture: ComponentFixture<StudentBookAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentBookAppointmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentBookAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
