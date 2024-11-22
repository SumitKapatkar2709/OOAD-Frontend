import { Component, OnInit } from '@angular/core';
import { ADoctor } from '../../models/appointment-student';
import { AppointmentService } from '../../services/appointment.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-doctor-today-appointments',
  templateUrl: './doctor-today-appointments.component.html',
  styleUrl: './doctor-today-appointments.component.scss'
})
export class DoctorTodayAppointmentsComponent implements OnInit{

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
    return this.router.url.startsWith('/doctorTodayAppointments');
  }

  doctor: ADoctor = new ADoctor();
  id: number | undefined;

  constructor(private adoctorService: AppointmentService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // Retrieve studentId and doctorId from the URL
    this.activatedRoute.params.subscribe(params => {
      this.id = +params['id'];    // Convert to number
    });

    // console.log('Route ID:', this.doctorId);
    this.adoctorService.getDoctorById(this.id).subscribe(data => {
      this.doctor=data;
    },
    error => console.log(error));
    this.sortAppointments();
  }

  sortAppointments() {
    if (this.doctor.appointment && this.doctor.appointment.length > 0) {
      // Sort by the start time, ensuring the appointments are in ascending order.
      this.doctor.appointment.sort((a, b) => {
        const aTime = new Date(a.appointmentStartTime).getTime();
        const bTime = new Date(b.appointmentStartTime).getTime();
        // console.log(`Comparing ${a.appointmentStartTime} and ${b.appointmentStartTime}`); // Debugging output
        return aTime - bTime;
      });
      // console.log('Sorted Appointments:', this.doctor.appointment); // Check the sorted result
    }
  }

  moveToAddDiagnosticDetails(){
    console.log(this.id);
    this.router.navigate(['/doctorAddDiagnosticDetails',this.id]);
  }

  moveToEditDiagnosticDetails(){
    console.log(this.id);
    this.router.navigate(['/doctorEditDiagnosticDetails',this.id]);
  }

  // moveToBA(doctorId: number | undefined) {
  //   if (this.studentId !== undefined) {
  //     // Proceed with navigation
  //     this.router.navigate(['studentBookAppointment', this.studentId, doctorId]);
  //   } else {
  //     // Handle the case when studentId is undefined, maybe show a message
  //     console.error('Student ID is undefined');
  //   }
  // }

}