import { Component } from '@angular/core';

@Component({
  selector: 'app-doctor-dashboard',
  templateUrl: './doctor-dashboard.component.html',
  styleUrls: ['./doctor-dashboard.component.scss']
})
export class DoctorDashboardComponent {
  appointments = [
    { date: '2024-10-15', time: '10:00 AM - 11:00 AM', patient: 'John Doe' },
    { date: '2024-10-16', time: '11:00 AM - 12:00 PM', patient: 'Jane Smith' }
  ];

  deleteAppointment(index: number): void {
    this.appointments.splice(index, 1);
  }
}