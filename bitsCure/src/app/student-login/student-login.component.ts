import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.scss']
})
export class StudentLoginComponent {
  studentName: string = '';

  constructor(private router: Router) {}

  login() {
    if (this.studentName) {
      // Navigate to the student dashboard and pass the student's name
      this.router.navigate(['/student-dashboard'], { state: { studentName: this.studentName } });
    }
  }
}
