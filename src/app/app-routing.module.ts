import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DoctorLoginComponent } from './components/doctor-login/doctor-login.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { DoctorRegistrationComponent } from './components/doctor-registration/doctor-registration.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminRequestManagementComponent } from './components/admin-request-management/admin-request-management.component';
import { AdminAddDoctorComponent } from './components/admin-add-doctor/admin-add-doctor.component';
import { AdminEditDoctorComponent } from './components/admin-edit-doctor/admin-edit-doctor.component';
import { AdminDeleteDoctorComponent } from './components/admin-delete-doctor/admin-delete-doctor.component';
import { AdminEditMainDoctorComponent } from './components/admin-edit-main-doctor/admin-edit-main-doctor.component';
import { StudentDashboardComponent } from './components/student-dashboard/student-dashboard.component';
import { StudentBookAppointmentComponent } from './components/student-book-appointment/student-book-appointment.component';
import { StudentLoginComponent } from './components/student-login/student-login.component';
import { StudentPastAppointmentComponent } from './components/student-past-appointment/student-past-appointment.component';
import { DoctorTodayAppointmentsComponent } from './components/doctor-today-appointments/doctor-today-appointments.component';
import { DoctorAddPatientDetailsComponent } from './components/doctor-add-patient-details/doctor-add-patient-details.component';
import { DoctorAddDiagnosticDetailsComponent } from './components/doctor-add-diagnostic-details/doctor-add-diagnostic-details.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { DoctorEditDiagnosticDetailsComponent } from './components/doctor-edit-diagnostic-details/doctor-edit-diagnostic-details.component';
import { DoctorEditPatientDetailsComponent } from './components/doctor-edit-patient-details/doctor-edit-patient-details.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:"home",component: HomeComponent},
  {path:"doctorLogin",component: DoctorLoginComponent},
  {path:"studentLogin",component: StudentLoginComponent},
  {path:"adminLogin",component: AdminLoginComponent},
  {path:"aboutUs",component: AboutUsComponent},
  {path:"doctorRegistration",component: DoctorRegistrationComponent},
  {path:"adminDashboard",component: AdminDashboardComponent},
  {path:"adminRequestManagement",component: AdminRequestManagementComponent},
  {path:"adminAddDoctor",component: AdminAddDoctorComponent},
  {path:"adminEditDoctor",component: AdminEditDoctorComponent},
  {path:"adminDeleteDoctor",component: AdminDeleteDoctorComponent},
  {path:"adminEditMainDoctor/:id",component: AdminEditMainDoctorComponent},
  {path:"studentBADashboard/:id",component: StudentDashboardComponent},
  {path:"studentBookAppointment/:studentId/:doctorId",component: StudentBookAppointmentComponent},
  {path:"studentPastAppointment/:studentId",component: StudentPastAppointmentComponent},
  {path:"doctorTodayAppointments/:id",component: DoctorTodayAppointmentsComponent},
  {path:"doctorAddPatientDetails/:doctorId/:appointmentId",component: DoctorAddPatientDetailsComponent},
  {path:"doctorAddDiagnosticDetails/:doctorId",component: DoctorAddDiagnosticDetailsComponent},
  {path:"doctorEditDiagnosticDetails/:doctorId",component: DoctorEditDiagnosticDetailsComponent},
  {path:"doctorEditPatientDetails/:doctorId/:appointmentId",component: DoctorEditPatientDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
