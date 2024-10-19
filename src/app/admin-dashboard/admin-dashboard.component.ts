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

  isCollapsed = true;
  dropdownOpen = false;

  // Toggle collapse on mouse hover
  hoverSidebar(isHovering: boolean): void {
    this.isCollapsed = !isHovering;
  }

  // Toggle the dropdown for Doctor Management
  toggleDropdown(): void {
    this.dropdownOpen = !this.dropdownOpen;
  }

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
      this.router.navigate(['doc-list']);
    })
  }
}
