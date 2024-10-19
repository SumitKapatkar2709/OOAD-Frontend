import { Component, OnInit } from '@angular/core';
import { Doctor } from '../doctor';
import { DocService } from '../doc.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})

export class AdminDashboardComponent implements OnInit{
  doctors:Doctor[];

  constructor(private doctorService: DocService, private router: Router) {

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

  updateDoctor(id:number){
    this.router.navigate(['editDoc',id]);

  }

  deleteDoctor(id: number){
    this.doctorService.deleteDoctor(id).subscribe(data =>{
      this.router.navigate(['doc-list',id]);
    })
  }
}
