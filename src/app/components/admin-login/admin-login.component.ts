import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.scss'
})
export class AdminLoginComponent {

  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onLogin() {
    
    if (this.email === 'admin@gmail.com' && this.password === 'password') {
      alert('Login Successful');
      this.router.navigate(['/adminRequestManagement']);
    } else {
      alert('Invalid email or password');
    }
  }

}
