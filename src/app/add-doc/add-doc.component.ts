import { Component, OnInit } from '@angular/core';
import { Doctor } from '../doctor';
import { DocService } from '../doc.service';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

@Component({
  selector: 'app-add-doc',
  templateUrl: './add-doc.component.html',
  styleUrl: './add-doc.component.css'
})
export class AddDocComponent implements OnInit{
  //can do like this or we can make a object of doctor.ts i.e- doctor: Doctor = new Doctor()

  doctor: Doctor = new Doctor();
  constructor(private doctorService : DocService,private router:Router){ }

  ngOnInit(): void {
      
  }

  saveDoctor() {
    this.doctorService.createDoctor(this.doctor)
      .pipe(
        tap(data => {
          console.log(data);
          this.goToDocList(); // Navigate on success
        })
      )
      .subscribe({
        error: (error) => console.log(error)
      });
  }

  goToDocList(){
    this.router.navigate(['/doc-list'])  //constructor parameter for router is necessary
  }
  // doctor = {
  //   name: '',
  //   specialisation: '',
  //   age: null as number | null,
  //   address: '',
  //   phone: '',
  //   email: '',
  //   experience: null as number | null,
  //   password: '',
  //   documents: null as File | null,
  // };

  // onFileChange(event: any): void {
  //   if (event.target.files.length > 0) {
  //     this.doctor.documents = event.target.files[0];
  //   }
  // }

  
  onSubmit(): void {
    console.log(this.doctor);
    this.saveDoctor();
    // if (this.isFormValid()) {
    //   console.log('Doctor registered:', this.doctor);
      
  //   } else {
  //     console.log('Form is not valid');
  //   }
  }

 
  // private isFormValid(): boolean {
  //   return (
  //     this.doctor.name.trim() !== '' &&
  //     this.doctor.specialisation.trim() !== '' &&
  //     this.doctor.age !== null &&
  //     this.doctor.address.trim() !== '' &&
  //     this.doctor.phone.trim() !== '' &&
  //     this.doctor.email.trim() !== '' &&
  //     this.doctor.experience !== null &&
  //     this.doctor.password.trim() !== '' &&
  //     this.doctor.documents !== null
  //   );
  // }

  
  // private resetForm(): void {
  //   this.doctor = {
  //     name: '',
  //     specialisation: '',
  //     age: null,
  //     address: '',
  //     phone: '',
  //     email: '',
  //     experience: null,
  //     password: '',
  //     documents: null,
  //   };
  // }

}
