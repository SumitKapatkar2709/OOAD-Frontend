import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { AppointmentConfirmationComponent } from './appointment-confirmation/appointment-confirmation.component';
import { RegistrationComponentComponent } from './registration-component/registration-component.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';


const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },  // Redirect to welcome page by default
  { path: 'welcome', component:WelcomeComponent },
  { path: 'doctor-dashboard', component: DoctorDashboardComponent },
  { path: 'admin-dashboard', component:AdminDashboardComponent },
  { path: 'student-dashboard', component: StudentDashboardComponent },
  { path: 'appointment-confirmation', component:AppointmentConfirmationComponent },
  { path: 'doctor-registration', component: RegistrationComponentComponent },
  { path: 'register', component:  RegistrationComponentComponent},
  { path: 'doctor-availability', component:ProfileComponent },
  { path: 'password validation', component:AdminLoginComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

