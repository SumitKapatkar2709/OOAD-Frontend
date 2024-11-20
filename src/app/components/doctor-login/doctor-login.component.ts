import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-login',
  templateUrl: './doctor-login.component.html',
  styleUrl: './doctor-login.component.scss'
})
export class DoctorLoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onLogin() {
    
    if (this.email === 'doctor@example.com' && this.password === 'password') {
      alert('Login Successful');
      this.router.navigate(['/doctor-dashboard']);
    } else {
      alert('Invalid email or password');
    }
  }

}
