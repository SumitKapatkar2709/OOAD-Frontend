import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';  // Import the routing module
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { DoctorListComponent } from './doctor-list/doctor-list.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentDashboardComponent,
    WelcomeComponent,
    DoctorDashboardComponent,
    AdminDashboardComponent,
    StudentLoginComponent,
    DoctorListComponent  // Declare the new component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  // Include the router module
    FormsModule
  ],
  providers: [provideHttpClient(withFetch())],
  bootstrap: [AppComponent]
})
export class AppModule { }
