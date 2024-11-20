import { Component, OnInit } from '@angular/core';
import { Doctor } from '../../models/doctor';
import { DoctorService } from '../../services/doctor.service';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

@Component({
  selector: 'app-doctor-registration',
  templateUrl: './doctor-registration.component.html',
  styleUrl: './doctor-registration.component.scss'
})
export class DoctorRegistrationComponent implements OnInit{

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

  //abhisek code starts here

  // doctor = {
  //   name: '',
  //   specialisation: '',
  //   age: null as number | null,
  //   address: '',
  //   phone: '',
  //   email: '',
  //   experience: null as number | null,
  //   password: '',
  //   documents: null as File | null,
  // };

  // onFileChange(event: any): void {
  //   if (event.target.files.length > 0) {
  //     this.doctor.documents = event.target.files[0];
  //   }
  // }

  
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

  
  // private resetForm(): void {
  //   this.doctor = {
  //     name: '',
  //     specialisation: '',
  //     age: null,
  //     address: '',
  //     phone: '',
  //     email: '',
  //     experience: null,
  //     password: '',
  //     documents: null,
  //   };
  // }

}
