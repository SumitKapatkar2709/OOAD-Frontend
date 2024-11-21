import { Component, OnInit } from '@angular/core';
import { Doctor } from '../../models/doctor';
import { DoctorService } from '../../services/doctor.service';
import { Router } from '@angular/router';
import { catchError, of, tap } from 'rxjs';

@Component({
  selector: 'app-admin-request-management',
  templateUrl: './admin-request-management.component.html',
  styleUrl: './admin-request-management.component.scss'
})
export class AdminRequestManagementComponent implements OnInit{
  
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
    return this.router.url === '/adminRequestManagement';
  }

  doctors: Doctor[] = [];
  doctor: Doctor = new Doctor();

  constructor(private doctorService: DoctorService, private router: Router) {

  }

  ngOnInit(): void {
    this.getUnverifeidDoctors();
      
  }

  private getUnverifeidDoctors(){
    this.doctorService.getUnverifiedDoctorList().subscribe(data => {
      this.doctors = data;
      console.log(data);
    });
  }

  verifyDoctor(id: number | undefined) {
    this.doctorService.acceptDoctor(id).pipe(
      // Perform side effect after successful verification
      tap(() => {
        alert('Doctor Verified Successfully!');
        this.getUnverifeidDoctors(); // Reload doctors to reflect changes
      }),
      // Handle any error and show appropriate message
      catchError((error) => {
        console.error('Error verifying doctor', error);
        alert('Doctor Verified Successfully!');
        this.getUnverifeidDoctors(); // Reload doctors to reflect changes
        // alert('There was an error verifying the doctor');
        return of(null); // Return an empty observable to prevent breaking the flow
      })
    ).subscribe();
  }

  removeDoctor(id: number | undefined){
    this.doctorService.rejectDoctor(id).subscribe(data =>{
      alert('Doctor Rejected Successfully');
      this.getUnverifeidDoctors(); // Reload doctors to reflect changes
      // this.router.navigate(['doc-list']);
    })
  }

  // saveDoctor() {
  //   this.doctorService.updateDoctor(doctor.doctorId,this.doctor.isVerified,)
  //     .pipe(
  //       tap(data => {
  //         console.log(data);
  //         // this.goToDocList(); // Navigate on success
  //       })
  //     )
  //     .subscribe({
  //       error: (error) => console.log(error)
  //     });
  // }

  // updateDoctor(id:number){
  //   this.router.navigate(['editDoc',id]);

  // }

  // private getDoctors(){
  //   this.doctorService.getDoctorList().subscribe(data => {
  //     this.doctors = data;
  //     console.log(data);
  //   });
  // }

  // updateDoctor(id:number){
  //   this.router.navigate(['editDoc',id]);

  // }

  // deleteDoctor(id: number){
  //   this.doctorService.deleteDoctor(id).subscribe(data =>{
  //     this.router.navigate(['doc-list']);
  //   })
  // }

}
