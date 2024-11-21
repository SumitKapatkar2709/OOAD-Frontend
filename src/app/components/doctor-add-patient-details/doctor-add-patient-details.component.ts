import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../../services/appointment.service';
import { PatientDetails } from '../../models/appointment-student';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs';

@Component({
  selector: 'app-doctor-add-patient-details',
  templateUrl: './doctor-add-patient-details.component.html',
  styleUrl: './doctor-add-patient-details.component.scss'
})
export class DoctorAddPatientDetailsComponent implements OnInit{
  

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

  patientDetail: PatientDetails = new PatientDetails();
  // id: number | undefined = undefined;
  appointmentId: number | undefined;
  doctorId: number | undefined;
  // Initialize with a default time value (e.g., 12:00 PM)
  breakStartTime: string = '12:00';  // Use a time string format 'HH:mm'
  constructor(private appointmentService: AppointmentService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // this.id=this.router.snapshot.params['id'];//this.router.snapshot.params['id'];
    // this.doctorService.getDoctorById(this.id).subscribe(data => {
    //   this.doctor=data;
    // },
    // error => console.log(error));

    // Retrieve studentId and doctorId from the URL
    this.activatedRoute.params.subscribe(params => {
      this.appointmentId = +params['appointmentId'];  // Convert to number
      this.doctorId = +params['doctorId'];    // Convert to number
    });

    // // Check if idParam is a valid number or undefined
    // if (idParam !== undefined && !isNaN(Number(idParam))) {
    //   this.id = Number(idParam); // Assign the number if valid
    // } else {
    //   this.id = undefined; // Set to undefined if invalid
    // }

    // console.log('Route ID:', this.id);
    // this.doctorService.getDoctorById(this.id).subscribe(data => {
    //   this.doctor=data;
    // },
    // error => console.log(error));
  }

  saveDetails() {
    this.appointmentService.addPatientDetails(this.patientDetail,this.appointmentId)
      .pipe(
        tap(data => {
          console.log(data);
          alert('Data Added Successfully!!');
          // this.goToDocList(); // Navigate on success
        })
      )
      .subscribe({
        error: (error) => console.log(error)
      });
  }

  goToDocList(){
    this.router.navigate(['/doc-list'])  //constructor parameter for router is necessary
  }

  onSubmit(): void {
    // console.log(this.doctor);
    this.saveDetails();
    // if (this.isFormValid()) {
    //   this.saveDoctor();
    //   console.log('Doctor registered:', this.doctor);
    //   alert('Doctor Added Successfully!!!');
      
    // } else {
    //   console.log('Form is not valid');
    //   alert('Form is not valid so Registration Unsuccessfull');
    // }
  }

  moveToAddDiagnosticDetails(){
    console.log(this.doctorId);
    this.router.navigate(['/doctorAddDiagnosticDetails',this.doctorId]);
  }
 
  // private isFormValid(): boolean {
  //   console
  //   return (
  //     this.doctor.doctorName.trim() !== '' &&
  //     this.doctor.specialization.trim() !== '' &&
  //     this.doctor.age !== null &&
  //     this.doctor.yearsOfExperience !== null &&
  //     this.doctor.doctorAddress.trim() !== '' &&
  //     this.doctor.holiday.trim() !== '' &&
  //     this.doctor.breakStartTime.trim() !== '' &&
  //     this.doctor.breakEndTime !== null &&
  //     this.doctor.dutyStartTime.trim() !== '' &&
  //     this.doctor.dutyEndTime !== null
  //   );
  // }

}
