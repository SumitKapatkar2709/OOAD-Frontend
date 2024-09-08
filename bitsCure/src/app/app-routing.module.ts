import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },  // Redirect empty path to welcome page
  { path: 'welcome', component: WelcomeComponent },         // Welcome page route
  { path: 'doctor-dashboard', component: DoctorDashboardComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'student-dashboard', component: StudentDashboardComponent } // Student dashboard route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
