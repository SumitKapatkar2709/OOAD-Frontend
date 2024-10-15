

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  doctorRequests = [
    { id: 1, name: 'Dr. John Doe', specialisation: 'Cardiology', age: 40, address: '123 Main St', phone: '555-1234' },
    { id: 2, name: 'Dr. Jane Smith', specialisation: 'Ophthalmology', age: 35, address: '456 Elm St', phone: '555-5678' }
  ];

  constructor() { }

  ngOnInit(): void { }

  acceptRequest(id: number): void {
    const requestIndex = this.doctorRequests.findIndex(request => request.id === id);
    if (requestIndex !== -1) {
      console.log(`Accepted request with id: ${id}`);
      this.doctorRequests.splice(requestIndex, 1); // Remove the request from the list
    }
  }

  rejectRequest(id: number): void {
    const requestIndex = this.doctorRequests.findIndex(request => request.id === id);
    if (requestIndex !== -1) {
      console.log(`Rejected request with id: ${id}`);
      this.doctorRequests.splice(requestIndex, 1); // Remove the request from the list
    }
  }
}


