import { Component, OnInit } from '@angular/core';
import { ADoctor, Appointment, Student } from '../../models/appointment-student';
import { AppointmentService } from '../../services/appointment.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-book-appointment',
  templateUrl: './student-book-appointment.component.html',
  styleUrl: './student-book-appointment.component.scss'
})
export class StudentBookAppointmentComponent implements OnInit {
  isCollapsed = true;
  dropdownOpen = false;

  // Toggle collapse on mouse hover
  hoverSidebar(isHovering: boolean): void {
    this.isCollapsed = !isHovering;
  }

  // Toggle the dropdown for Doctor Management
  toggleDropdown(): void {
    this.dropdownOpen = !this.dropdownOpen;
  }

  // Check if the current route is 'adminAddDoctor'
  isActiveRoute(): boolean {
    // return this.router.url === '/adminEditMainDoctor/';
    return this.router.url.startsWith('/adminEditMainDoctor');
  }

  doctor: ADoctor = new ADoctor();
  studentId: number | undefined;
  doctorId: number | undefined;
  isBooked: boolean = false;
  // Initialize with a default time value (e.g., 12:00 PM)
  breakStartTime: string = '12:00';  // Use a time string format 'HH:mm'
  constructor(private adoctorService: AppointmentService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // Retrieve studentId and doctorId from the URL
    this.activatedRoute.params.subscribe(params => {
      this.studentId = +params['studentId'];  // Convert to number
      this.doctorId = +params['doctorId'];    // Convert to number
    });

    // console.log('Route ID:', this.doctorId);
    this.adoctorService.getDoctorById(this.doctorId).subscribe(data => {
      this.doctor=data;
    },
    error => console.log(error));
  }

  onSlotClick(appointmentId: number | undefined): void {
    try {
      this.adoctorService
        .assignStudentToAppointment(appointmentId, this.studentId)
        .subscribe({
          next: (response) => {
            this.isBooked = true;
            this.ngOnInit();
            console.log(response); // Success message
            alert(response); // Optionally show a message to the user
          },
          error: (error) => {
            console.error('Error:', error);
            alert('Failed to assign student to the appointment.');
          },
        });
    } catch (err) {
      console.error('Validation Error:', err);
      alert(err); // Show validation error to the user
    }
  }

  // onSlotClick(id:number | undefined) {
  //   this.adoctorService.assignStudentToAppointment(id,this.studentId)
  //   console.log('Slot selected:',this.studentId);
  //   // You can perform any action here, such as opening a modal or booking
  //   alert(`Clicked!!`);
  // }

  // onSlotClick(slot: { start: string, end: string }) {
  //   console.log('Slot selected:', slot);
  //   // You can perform any action here, such as opening a modal or booking
  //   alert(`You selected the slot from ${slot.start} to ${slot.end}`);
  // }

  // assignStudent(appointmentId: number | undefined, studentId: number | undefined): void {
  //   try {
  //     this.studentService
  //       .assignStudentToAppointment(appointmentId, studentId)
  //       .subscribe({
  //         next: (response) => {
  //           console.log(response); // Success message
  //           alert(response); // Optionally show a message to the user
  //         },
  //         error: (error) => {
  //           console.error('Error:', error);
  //           alert('Failed to assign student to the appointment.');
  //         },
  //       });
  //   } catch (err) {
  //     console.error('Validation Error:', err.message);
  //     alert(err.message); // Show validation error to the user
  //   }
  // }

}
