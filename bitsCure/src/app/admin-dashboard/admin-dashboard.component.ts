import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  doctorRequests = [
    { id: 1, name: 'Dr. Ashok Mitthal', specialisation: 'Cardiology', age: 40, address: 'Pilani', phone: '555-1234' },
    { id: 2, name: 'Dr. Sushank Singh', specialisation: 'Ophthalmology', age: 35, address: 'Vidyavihar', phone: '555-5678' },
    // Add more sample data or fetch from an API
  ];

  constructor() { }

  ngOnInit(): void {
    // Fetch the doctor requests from the server if needed
  }

  acceptRequest(id: number): void {
    // Handle acceptance logic here
    console.log(`Accepted request with id: ${id}`);
  }

  rejectRequest(id: number): void {
    // Handle rejection logic here
    console.log(`Rejected request with id: ${id}`);
  }
}
