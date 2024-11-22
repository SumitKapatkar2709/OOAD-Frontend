import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { DoctorLoginComponent } from './components/doctor-login/doctor-login.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { DoctorRegistrationComponent } from './components/doctor-registration/doctor-registration.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { provideHttpClient } from '@angular/common/http';
import { AdminRequestManagementComponent } from './components/admin-request-management/admin-request-management.component';
import { AdminAddDoctorComponent } from './components/admin-add-doctor/admin-add-doctor.component';
import { AdminEditDoctorComponent } from './components/admin-edit-doctor/admin-edit-doctor.component';
import { AdminDeleteDoctorComponent } from './components/admin-delete-doctor/admin-delete-doctor.component';
import { AdminEditMainDoctorComponent } from './components/admin-edit-main-doctor/admin-edit-main-doctor.component';
import { StudentBookAppointmentComponent } from './components/student-book-appointment/student-book-appointment.component';
import { StudentPastAppointmentComponent } from './components/student-past-appointment/student-past-appointment.component';
import { StudentLoginComponent } from './components/student-login/student-login.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { StudentDashboardComponent } from './components/student-dashboard/student-dashboard.component';
import { DoctorTodayAppointmentsComponent } from './components/doctor-today-appointments/doctor-today-appointments.component';
import { DoctorAddPatientDetailsComponent } from './components/doctor-add-patient-details/doctor-add-patient-details.component';
import { DoctorEditPatientDetailsComponent } from './components/doctor-edit-patient-details/doctor-edit-patient-details.component';
import { DoctorDeletePatientDetailsComponent } from './components/doctor-delete-patient-details/doctor-delete-patient-details.component';
import { DoctorAddDiagnosticDetailsComponent } from './components/doctor-add-diagnostic-details/doctor-add-diagnostic-details.component';
import { DoctorEditDiagnosticDetailsComponent } from './components/doctor-edit-diagnostic-details/doctor-edit-diagnostic-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DoctorLoginComponent,
    AboutUsComponent,
    DoctorRegistrationComponent,
    AdminDashboardComponent,
    AdminRequestManagementComponent,
    AdminAddDoctorComponent,
    AdminEditDoctorComponent,
    AdminDeleteDoctorComponent,
    AdminEditMainDoctorComponent,
    StudentBookAppointmentComponent,
    StudentPastAppointmentComponent,
    StudentLoginComponent,
    AdminLoginComponent,
    StudentDashboardComponent,
    DoctorTodayAppointmentsComponent,
    DoctorAddPatientDetailsComponent,
    DoctorEditPatientDetailsComponent,
    DoctorDeletePatientDetailsComponent,
    DoctorAddDiagnosticDetailsComponent,
    DoctorEditDiagnosticDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
