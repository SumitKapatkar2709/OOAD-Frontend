import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent {
  adminPassword: string = '';
  loginError: string = '';

  // Predefined correct admin password
  private readonly correctPassword: string = 'admin123';

  constructor(private router: Router) {}

  onSubmit(): void {
    // Validate the entered password
    if (this.adminPassword === this.correctPassword) {
      // Navigate to admin dashboard if the password is correct
      this.router.navigate(['/admin-dashboard']);
    } else {
      // Show error message if the password is incorrect
      this.loginError = 'Invalid password. Access denied.';
    }
  }
}
