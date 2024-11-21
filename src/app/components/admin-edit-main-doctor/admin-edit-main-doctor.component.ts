import { Component, OnInit } from '@angular/core';
import { Doctor } from '../../models/doctor';
import { DoctorService } from '../../services/doctor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs';

@Component({
  selector: 'app-admin-edit-main-doctor',
  templateUrl: './admin-edit-main-doctor.component.html',
  styleUrl: './admin-edit-main-doctor.component.scss'
})
export class AdminEditMainDoctorComponent implements OnInit {

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

  doctor: Doctor = new Doctor();
  id: number | undefined = undefined;
  // Initialize with a default time value (e.g., 12:00 PM)
  breakStartTime: string = '12:00';  // Use a time string format 'HH:mm'
  constructor(private doctorService: DoctorService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // this.id=this.router.snapshot.params['id'];//this.router.snapshot.params['id'];
    // this.doctorService.getDoctorById(this.id).subscribe(data => {
    //   this.doctor=data;
    // },
    // error => console.log(error));

    // Accessing route parameters using snapshot from ActivatedRoute
    const idParam = this.activatedRoute.snapshot.params['id'];

    // Check if idParam is a valid number or undefined
    if (idParam !== undefined && !isNaN(Number(idParam))) {
      this.id = Number(idParam); // Assign the number if valid
    } else {
      this.id = undefined; // Set to undefined if invalid
    }

    console.log('Route ID:', this.id);
    this.doctorService.getDoctorById(this.id).subscribe(data => {
      this.doctor=data;
    },
    error => console.log(error));
  }

  saveDoctor() {
    console.log("doctor...",this.doctor);
    this.doctorService.createDoctor(this.doctor)
      .pipe(
        tap(data => {
          console.log(data);
          // this.goToDocList(); // Navigate on success
        })
      )
      .subscribe({
        error: (error) => console.log(error)
      });
  }

  goToDocList() {
    this.router.navigate(['/doc-list'])  //constructor parameter for router is necessary
  }

  onSubmit(): void {
    // console.log(this.doctor);
    // this.saveDoctor();
    if (this.isFormValid()) {
      this.saveDoctor();
      console.log('Doctor registered:', this.doctor);
      alert('Doctor Added Successfully!!!');

    } else {
      console.log('Form is not valid');
      alert('Form is not valid so Registration Unsuccessfull');
    }
  }


  private isFormValid(): boolean {
    console
    return (
      this.doctor.doctorName.trim() !== '' &&
      this.doctor.specialization.trim() !== '' &&
      this.doctor.age !== null &&
      this.doctor.yearsOfExperience !== null &&
      this.doctor.doctorAddress.trim() !== '' &&
      this.doctor.holiday.trim() !== '' &&
      this.doctor.breakStartTime.trim() !== '' &&
      this.doctor.breakEndTime !== null &&
      this.doctor.dutyStartTime.trim() !== '' &&
      this.doctor.dutyEndTime !== null
    );
  }

}
