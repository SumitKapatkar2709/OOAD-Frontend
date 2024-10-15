import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss']
})
export class StudentDashboardComponent implements OnInit {
  selectedTab = 'book';
  
  specializations = ['Cardio', 'Opthalmo', 'Dermatology', 'Neurology'];
  
  doctors = [
    { name: 'Dr. Smith', specialization: 'Cardio', experience: 15, address: '123 Heart Lane', phone: '123-456-7890' },
    { name: 'Dr. Jane', specialization: 'Opthalmo', experience: 10, address: '456 Eye Street', phone: '987-654-3210' },
    { name: 'Dr. Bob', specialization: 'Cardio', experience: 20, address: '789 Cardiac Blvd', phone: '555-555-5555' },
    { name: 'Dr. Alice', specialization: 'Dermatology', experience: 8, address: '321 Skin Ave', phone: '111-222-3333' }
  ];

  selectedSpecialization: string = '';
  filteredDoctors: any[] = [];
  selectedDoctor: string = '';
  selectedDoctorDetails: any = null;

  appointmentDate: string = '';
  appointmentTime: string = '';
  availableTimeSlots = ['10:00 AM - 11:00 AM', '11:00 AM - 12:00 PM', '01:00 PM - 02:00 PM'];

  confirmedAppointment: any = null;

  onSpecializationChange() {
    this.filteredDoctors = this.doctors.filter(doctor => doctor.specialization === this.selectedSpecialization);
    this.selectedDoctor = '';
    this.selectedDoctorDetails = null;
  }

  onDoctorSelect() {
    this.selectedDoctorDetails = this.doctors.find(doctor => doctor.name === this.selectedDoctor);
  }

  confirmBooking() {
    this.confirmedAppointment = {
      doctor: this.selectedDoctorDetails,
      date: this.appointmentDate,
      time: this.appointmentTime
    };
  }

  minDate: string = '';

  ngOnInit() {
    const today = new Date();
    this.minDate = today.toISOString().split('T')[0]; // Format as yyyy-MM-dd
  }
}
