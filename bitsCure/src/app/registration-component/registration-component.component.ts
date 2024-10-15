import { Component } from '@angular/core';

@Component({
  selector: 'app-registration-component',
  templateUrl: './registration-component.component.html',
  styleUrls: ['./registration-component.component.scss']
})
export class RegistrationComponentComponent {
  
  name: string = '';
  specialisation: string = '';
  experience: number = 0; 
  address: string = '';
  phone: string = '';
  email: string = '';
  password: string = '';
  documentFile: File | null = null; 

  
  onSubmit(): void {
    // Collect the form data
    const formData = {
      name: this.name,
      specialisation: this.specialisation,
      experience: this.experience, 
      address: this.address,
      phone: this.phone,
      email: this.email,
      document: this.documentFile ,
      password: this.password
    };

    
    console.log('Form Data:', formData);

    
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.documentFile = input.files[0]; 
    }
  }
}



