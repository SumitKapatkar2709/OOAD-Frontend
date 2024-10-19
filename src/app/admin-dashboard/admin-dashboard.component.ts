import { Component, OnInit } from '@angular/core';
import { Doctor } from '../doctor';
import { DocService } from '../doc.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})

export class AdminDashboardComponent implements OnInit{
  doctors:Doctor[];

  constructor(private doctorService: DocService) {

  }

  ngOnInit(): void {
    this.getDoctors();
      
  }

  private getDoctors(){
    this.doctorService.getDoctorList().subscribe(data => {
      this.doctors = data;
      console.log(data);
    });
    
  }

}
