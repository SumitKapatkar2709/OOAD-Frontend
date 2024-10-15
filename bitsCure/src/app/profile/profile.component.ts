import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  editMode = false;
  user = {
    name: 'Dr. John Doe',
    specialisation: 'Cardiology',
    age: 40,
    address: '123 Main St',
    phone: '555-1234',
    email: 'johndoe@example.com'
  };

  toggleEditMode(): void {
    this.editMode = !this.editMode;
  }

  saveProfile(): void {
    console.log('Profile saved:', this.user);
    this.toggleEditMode(); // Optionally, exit edit mode after saving
  }
}


