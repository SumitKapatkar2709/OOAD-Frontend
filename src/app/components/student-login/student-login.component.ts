import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../../models/appointment-student';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrl: './student-login.component.scss'
})
export class StudentLoginComponent {
  email: string = '';
  password: string = '';
  students: Student[] = [];  // Array to store student objects

  // Sample student data
  student1: Student = new Student(1, 'John Doe', 20, '1234567890', 'john.doe@example.com');
  student2: Student = new Student(2, 'Jane Smith', 22, '2345678901', 'jane.smith@example.com');
  student3: Student = new Student(3, 'Alice Johnson', 19, '3456789012', 'alice.johnson@example.com');
  student4: Student = new Student(4, 'Bob Lee', 21, '4567890123', 'bob.lee@example.com');
  student5: Student = new Student(5, 'Charlie Brown', 23, '5678901234', 'charlie.brown@example.com');


  constructor(private router: Router) {
    // Initialize the students array with the two student objects
    this.students.push(this.student1);
    this.students.push(this.student2);
  }

  onLogin() {
    // For example purposes, check if the email matches a student and login
    const student = this.students.find(
      (s) => s.email === this.email && this.password === 'password'
    );

    this.moveTostudentDashboard(student?.studentId);

    // if (student) {
    //   alert('Login Successful');
    //   this.router.navigate(['/studentDashboard',id]);
    // } else {
    //   alert('Invalid email or password');
    // }


  }

  moveTostudentDashboard(id: number | undefined) {
    // Check if student is found (i.e., id is defined)
    if (id !== undefined) {
      alert('Login Successful');
      this.router.navigate(['/studentBADashboard', id]); // Navigate to the student dashboard route
    } else {
      alert('Invalid email or password');  // If no student is found, show error message
    }
  }
  // editDoctor(id: number | undefined){
  //   this.router.navigate(['adminEditMainDoctor',id]);
  // }

}
