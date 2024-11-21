import { Component, OnInit } from '@angular/core';
import { Doctor } from '../../models/doctor';
import { DoctorService } from '../../services/doctor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrl: './student-dashboard.component.scss'
})
export class StudentDashboardComponent implements OnInit{
  
  
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
    // return this.router.url === '/adminRequestManagement';
    return this.router.url.startsWith('/studentDashboard');
  }

  doctors: Doctor[] = [];
  doctor: Doctor = new Doctor();

  // To store the studentId from the current route
  studentId: number | undefined;

  constructor(private doctorService: DoctorService, private router: Router,private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.getDoctors();
    this.studentId = Number(this.route.snapshot.paramMap.get('id')); // Get studentId from the URL
    console.log('Student ID:', this.studentId);
  }

  private getDoctors(){
    this.doctorService.getDoctorList().subscribe(data => {
      this.doctors = data;
      console.log(data);
    });
  }

  moveToBA(doctorId: number | undefined) {
    if (this.studentId !== undefined) {
      // Proceed with navigation
      this.router.navigate(['studentBookAppointment', this.studentId, doctorId]);
    } else {
      // Handle the case when studentId is undefined, maybe show a message
      console.error('Student ID is undefined');
    }
  }

  // moveToBA(doctorId: number) {
  //   if (this.studentId !== undefined) {
  //     // Navigate to studentBookAppointment with both studentId and doctorId
  //     this.router.navigate(['studentBookAppointment', this.studentId, doctorId]);
  //   }
  // }

}
