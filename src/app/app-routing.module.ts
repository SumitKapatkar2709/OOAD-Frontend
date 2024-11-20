import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DoctorLoginComponent } from './components/doctor-login/doctor-login.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { DoctorRegistrationComponent } from './components/doctor-registration/doctor-registration.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminRequestManagementComponent } from './components/admin-request-management/admin-request-management.component';
import { AdminAddDoctorComponent } from './components/admin-add-doctor/admin-add-doctor.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:"home",component: HomeComponent},
  {path:"doctorLogin",component: DoctorLoginComponent},
  {path:"aboutUs",component: AboutUsComponent},
  {path:"doctorRegistration",component: DoctorRegistrationComponent},
  {path:"adminDashboard",component: AdminDashboardComponent},
  {path:"adminRequestManagement",component: AdminRequestManagementComponent},
  {path:"adminAddDoctor",component: AdminAddDoctorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
