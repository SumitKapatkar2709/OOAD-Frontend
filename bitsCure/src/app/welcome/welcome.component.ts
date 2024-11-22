import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Doctor {
  doctorId: number;
  name: string;
  age: number;
  specialization: string;
  doctorAddress: string;
  yearsOfExperience: number;
  doctorSlots: number;
}

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'] // Fixed styleUrl to styleUrls
})
export class WelcomeComponent {
  showLoginOptions = false;
  doctors: Doctor[] = []; // Use the Doctor interface

  constructor(private http: HttpClient) {}

  getDoctors() {
    this.http.get<Doctor[]>('http://localhost:8080/doctors').subscribe(
      (response) => {
        this.doctors = response;
      },
      (error) => {
        console.error('Error fetching doctors:', error);
      }
    );
  }

  ngOnInit() {
    this.getDoctors(); // Call getDoctors when the component initializes
  }
}
