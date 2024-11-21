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
  }

  onAddDetailsClick(appointmentId:number|undefined,){
    // console.log('Route ID in function:', this.doctorId);
    this.router.navigate(['/doctorAddPatientDetails',this.doctorId,appointmentId]);
  }

  moveToAddDiagnosticDetails(){
    console.log(this.doctorId);
    this.router.navigate(['/doctorAddDiagnosticDetails',this.doctorId]);
  }

}
