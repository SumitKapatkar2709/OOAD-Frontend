import { Component, OnInit } from '@angular/core';
import { ADoctor } from '../../models/appointment-student';
import { AppointmentService } from '../../services/appointment.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-doctor-add-diagnostic-details',
  templateUrl: './doctor-add-diagnostic-details.component.html',
  styleUrl: './doctor-add-diagnostic-details.component.scss'
})
export class DoctorAddDiagnosticDetailsComponent implements OnInit{

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
    return this.router.url.startsWith('/doctorAddDiagnosticDetails');
  }

  doctor: ADoctor = new ADoctor();
  doctorId: number | undefined;
  availableAppointments: any[] = [];

  constructor(private adoctorService: AppointmentService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // Retrieve studentId and doctorId from the URL
    this.activatedRoute.params.subscribe(params => {
      this.doctorId = +params['doctorId'];    // Convert to number
    });

    console.log('Route ID:', this.doctorId);
    this.adoctorService.getDoctorById(this.doctorId).subscribe(data => {
      this.doctor=data;
    },
    error => console.log(error));
    this.sortAppointments();
  }

  onAddDetailsClick(appointmentId:number|undefined,){
    // console.log('Route ID in function:', this.doctorId);
    this.router.navigate(['/doctorAddPatientDetails',this.doctorId,appointmentId]);
  }

  moveToAddDiagnosticDetails(){
    console.log(this.doctorId);
    this.router.navigate(['/doctorAddDiagnosticDetails',this.doctorId]);
  }

  moveToEditDiagnosticDetails(){
    // console.log(this.id);
    this.router.navigate(['/doctorEditDiagnosticDetails',this.doctorId]);
  }
  moveToTodaysAppointments(){
    // console.log(this.id);
    this.router.navigate(['/doctorTodayAppointments',this.doctorId]);
  }

  // sortAppointments() {
  //   if (this.doctor.appointment && this.doctor.appointment.length > 0) {
  //     // Create a new sorted array instead of mutating the original array
  //     this.availableAppointments = [...this.doctor.appointment].sort((a, b) => {
  //       const aTime = new Date(a.appointmentStartTime).getTime();
  //       const bTime = new Date(b.appointmentStartTime).getTime();
  //       return aTime - bTime;
  //     });
  //   }
  // }

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

}
