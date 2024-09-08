import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-dashboard',
  templateUrl: './doctor-dashboard.component.html',
  styleUrls: ['./doctor-dashboard.component.scss']
})
export class DoctorDashboardComponent implements OnInit {
  upcomingAppointments = [
    { id: 1, patientName: 'John Doe', date: '2024-09-10', time: '10:00 AM' },
    { id: 2, patientName: 'Jane Smith', date: '2024-09-11', time: '11:00 AM' }
  ];

  availableSlots = ['09:00 AM - 10:00 AM', '10:00 AM - 11:00 AM', '01:00 PM - 02:00 PM'];
  newSlotTime: string = '';

  ngOnInit() {
    // Fetch upcoming appointments and available slots from the server if needed
  }

  approveAppointment(appointmentId: number) {
    // Logic to approve the appointment
    console.log(`Appointment ${appointmentId} approved.`);
  }

  rejectAppointment(appointmentId: number) {
    // Logic to reject the appointment
    console.log(`Appointment ${appointmentId} rejected.`);
  }

  addSlot() {
    if (this.newSlotTime) {
      const slot = `${this.newSlotTime} - ${this.calculateEndTime(this.newSlotTime)}`;
      this.availableSlots.push(slot);
      this.newSlotTime = '';
    }
  }

  removeSlot(slot: string) {
    this.availableSlots = this.availableSlots.filter(s => s !== slot);
  }

  private calculateEndTime(startTime: string): string {
    // Calculate end time based on start time (assuming a 1-hour slot)
    const [hours, minutes] = startTime.split(':').map(Number);
    const endHour = hours + 1;
    return `${endHour.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  }
}
