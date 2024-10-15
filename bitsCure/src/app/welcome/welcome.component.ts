import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {
  showLoginOptions = false;
  adminPassword: string = '';
  doctorName: string = '';
  doctorPassword: string = '';

  showAdminPasswordInput: boolean = false;
  showDoctorPasswordInput: boolean = false;

  correctAdminPassword: string = 'admin123';

  // Sample doctor credentials (replace this with a secure backend API)
  doctors = [
    { name: 'Dr.Smith', password: 'smith123' },
    { name: 'Dr.Jane', password: 'jane123' },
    { name: 'Dr.Bob', password: 'bob123' }
  ];

  constructor(private router: Router) {}

  // Show the password input modal for Admin Login
  showAdminLogin(): void {
    this.showAdminPasswordInput = true;
  }

  // Validate the entered admin password and navigate to the Admin Dashboard if correct
  validateAdminPassword(): void {
    if (this.adminPassword === this.correctAdminPassword) {
      this.router.navigate(['/admin-dashboard']);
    } else {
      alert('Incorrect admin password! Please try again.');
    }
  }

  // Close Admin login modal
  closeAdminLogin(): void {
    this.showAdminPasswordInput = false;
    this.adminPassword = '';
  }

  // Show the password input modal for Doctor Login
  showDoctorLogin(): void {
    this.showDoctorPasswordInput = true;
  }

  // Validate the entered doctor credentials and navigate to the Doctor Dashboard if correct
  validateDoctorPassword(): void {
    const doctor = this.doctors.find(
      doc => doc.name === this.doctorName && doc.password === this.doctorPassword
    );
    if (doctor) {
      this.router.navigate(['/doctor-dashboard']);
    } else {
      alert('Incorrect doctor name or password! Please try again.');
    }
  }

  // Close Doctor login modal
  closeDoctorLogin(): void {
    this.showDoctorPasswordInput = false;
    this.doctorName = '';
    this.doctorPassword = '';
  }

  navigateToRegister(): void {
    this.router.navigate(['/register']);
  }

  navigateToStudentDashboard(): void {
    this.router.navigate(['/student-dashboard']);
  }
}
