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
    StudentLoginComponent
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
