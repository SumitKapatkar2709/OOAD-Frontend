import { Component } from '@angular/core';
import { DoctorService } from '../../services/doctor.service';
import { Router } from '@angular/router';
import { Doctor } from '../../models/doctor';

@Component({
  selector: 'app-admin-delete-doctor',
  templateUrl: './admin-delete-doctor.component.html',
  styleUrl: './admin-delete-doctor.component.scss'
})
export class AdminDeleteDoctorComponent {

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
    return this.router.url === '/adminDeleteDoctor';
  }

  doctors: Doctor[] = [];

  constructor(private doctorService: DoctorService, private router: Router) { }

  ngOnInit(): void {
    this.getDoctors();
      
  }

  private getDoctors(){
    this.doctorService.getDoctorList().subscribe(data => {
      this.doctors = data;
      console.log(data);
    });
  }

  removeDoctor(id: number | undefined){
    this.doctorService.deleteDoctor(id).subscribe(data =>{
      alert('Doctor Deleted Successfully');
      this.getDoctors(); // Reload doctors to reflect changes
      // this.router.navigate(['doc-list']);
    })
  }

}
