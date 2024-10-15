import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';  // Import the routing module
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ProfileComponent } from './profile/profile.component';
import { AppointmentConfirmationComponent } from './appointment-confirmation/appointment-confirmation.component';
import { RegistrationComponentComponent } from './registration-component/registration-component.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    StudentDashboardComponent,
    WelcomeComponent,
    DoctorDashboardComponent,
    AdminDashboardComponent,
    AdminLoginComponent,
    ProfileComponent,
    AppointmentConfirmationComponent,
    RegistrationComponentComponent  // Declare the new component
  ],
  imports: [
   BrowserModule,
   FormsModule,
  RouterModule,
  AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
