import { Component, OnInit } from '@angular/core';
import { Doctor } from '../../models/doctor';
import { DoctorService } from '../../services/doctor.service';
import { Router } from '@angular/router';
import { catchError, of, tap } from 'rxjs';

@Component({
  selector: 'app-admin-edit-doctor',
  templateUrl: './admin-edit-doctor.component.html',
  styleUrl: './admin-edit-doctor.component.scss'
})
export class AdminEditDoctorComponent implements OnInit{
  
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

  // Check if the current route is 'adminRequestManagement'
  isActiveRoute(): boolean {
    return this.router.url === '/adminEditDoctor';
  }

  doctors: Doctor[] = [];
  // doctor: Doctor = new Doctor();

  constructor(private doctorService: DoctorService, private router: Router) {

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

  editDoctor(id: number | undefined){
    this.router.navigate(['adminEditMainDoctor',id]);
  }



}
