import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.scss']
})
export class DoctorListComponent implements OnInit {
  doctors: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getDoctors();
  }

  getDoctors() {
    this.http.get<any[]>('http://localhost:8080/doctors').subscribe(
      (response) => {
        this.doctors = response;
      },
      (error) => {
        console.error('Error fetching doctors:', error);
      }
    );
  }
}
