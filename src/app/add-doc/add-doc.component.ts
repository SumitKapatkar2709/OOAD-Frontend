import { Component } from '@angular/core';
import { Doctor } from '../doctor';

@Component({
  selector: 'app-add-doc',
  templateUrl: './add-doc.component.html',
  styleUrl: './add-doc.component.css'
})
export class AddDocComponent {
  //can do like this or we can make a object of doctor.ts i.e- doctor: Doctor = new Doctor()

  // doctor: Doctor = new Doctor();
  doctor = {
    name: '',
    specialisation: '',
    age: null as number | null,
    address: '',
    phone: '',
    email: '',
    experience: null as number | null,
    password: '',
    documents: null as File | null,
  };

  onFileChange(event: any): void {
    if (event.target.files.length > 0) {
      this.doctor.documents = event.target.files[0];
    }
  }

  
  onSubmit(): void {
    console.log(this.doctor);
    if (this.isFormValid()) {
      console.log('Doctor registered:', this.doctor);
      
    } else {
      console.log('Form is not valid');
    }
  }

 
  private isFormValid(): boolean {
    return (
      this.doctor.name.trim() !== '' &&
      this.doctor.specialisation.trim() !== '' &&
      this.doctor.age !== null &&
      this.doctor.address.trim() !== '' &&
      this.doctor.phone.trim() !== '' &&
      this.doctor.email.trim() !== '' &&
      this.doctor.experience !== null &&
      this.doctor.password.trim() !== '' &&
      this.doctor.documents !== null
    );
  }

  
  private resetForm(): void {
    this.doctor = {
      name: '',
      specialisation: '',
      age: null,
      address: '',
      phone: '',
      email: '',
      experience: null,
      password: '',
      documents: null,
    };
  }

}
