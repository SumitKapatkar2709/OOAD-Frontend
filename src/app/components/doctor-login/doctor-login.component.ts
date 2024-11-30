import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ALDoctor } from '../../models/appointment-student';

@Component({
  selector: 'app-doctor-login',
  templateUrl: './doctor-login.component.html',
  styleUrl: './doctor-login.component.scss'
})
export class DoctorLoginComponent {
  email: string = '';
  password: string = '';
  doctors: ALDoctor[] = [];

  doctor1: ALDoctor = new ALDoctor(1,"sumit@gmail.com");
  doctor2: ALDoctor = new ALDoctor(2,"naggender@gmail.com");
  doctor3: ALDoctor = new ALDoctor(3,"moksh@gmail.com");
  doctor4: ALDoctor = new ALDoctor(5,"john@gmail.com");
  doctor5: ALDoctor = new ALDoctor(6,"domenic@gmail.com");
  doctor6: ALDoctor = new ALDoctor(7,"siddharth@gmail.com");
  doctor7: ALDoctor = new ALDoctor(8,"nilesh@gmail.com");
  doctor8: ALDoctor = new ALDoctor(10,"keval@gmail.com");
  doctor9: ALDoctor = new ALDoctor(11,"sumit@gmail.com");
  doctor10: ALDoctor = new ALDoctor(4,"hemant@gmail.com");
  doctor11: ALDoctor = new ALDoctor(9,"rahul@gmail.com");

  constructor(private router: Router) {
    // Initialize the students array with the two student objects
    this.doctors.push(this.doctor1);
    this.doctors.push(this.doctor2);
    this.doctors.push(this.doctor3);
    this.doctors.push(this.doctor4);
    this.doctors.push(this.doctor5);
    this.doctors.push(this.doctor6);
    this.doctors.push(this.doctor7);
    this.doctors.push(this.doctor8);
    this.doctors.push(this.doctor9);
    this.doctors.push(this.doctor10);
    this.doctors.push(this.doctor11);
  }

  onLogin() {

    // For example purposes, check if the email matches a student and login
    const doctor = this.doctors.find(
      (s) => s.doctorEmail === this.email && this.password === 'password'
    );

    this.moveToDoctorDashboard(doctor?.doctorId);
  }

  moveToDoctorDashboard(id: number | undefined) {
    // Check if student is found (i.e., id is defined)
    if (id !== undefined) {
      alert('Login Successful');
      this.router.navigate(['/doctorTodayAppointments', id]); // Navigate to the student dashboard route
    } else {
      alert('Invalid email or password');  // If no student is found, show error message
    }
  }

}
