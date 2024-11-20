import { Component, OnInit } from '@angular/core';
import { Doctor } from '../../models/doctor';
import { DoctorService } from '../../services/doctor.service';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

@Component({
  selector: 'app-admin-add-doctor',
  templateUrl: './admin-add-doctor.component.html',
  styleUrl: './admin-add-doctor.component.scss'
})
export class AdminAddDoctorComponent implements OnInit{
   
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

  // Check if the current route is 'adminRequestManagement'
  isActiveRoute(): boolean {
    return this.router.url === '/adminAddDoctor';
  }

  doctor: Doctor = new Doctor();
  // Initialize with a default time value (e.g., 12:00 PM)
  breakStartTime: string = '12:00';  // Use a time string format 'HH:mm'
  constructor(private doctorService : DoctorService,private router:Router){ }

  ngOnInit(): void { }

  saveDoctor() {
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

  goToDocList(){
    this.router.navigate(['/doc-list'])  //constructor parameter for router is necessary
  }

  onSubmit(): void {
    // console.log(this.doctor);
    // this.saveDoctor();
    if (this.isFormValid()) {
      console.log(this.doctor);
      this.saveDoctor();
      console.log('Doctor registered:', this.doctor);
      alert('Registration Successfull');
      
    } else {
      console.log('Form is not valid');
      alert('Form is not valid so Registration Unsuccessfull');
    }
  }

 
  private isFormValid(): boolean {
    console
    return (
      this.doctor.name.trim() !== '' &&
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

  // doctors: Doctor[] = [];
  // doctor: Doctor = new Doctor();

  // constructor(private doctorService: DoctorService, private router: Router) {

  // }

  // ngOnInit(): void {
  //   this.getUnverifeidDoctors();
      
  // }

  // private getUnverifeidDoctors(){
  //   this.doctorService.getUnverifiedDoctorList().subscribe(data => {
  //     this.doctors = data;
  //     console.log(data);
  //   });
  // }

}
