import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocListComponent } from './doc-list/doc-list.component';
import { HomeComponent } from './home/home.component';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { AddDocComponent } from './add-doc/add-doc.component';
import { FormsModule } from '@angular/forms';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { EditDocComponent } from './edit-doc/edit-doc.component';

@NgModule({
  declarations: [
    AppComponent,
    DocListComponent,
    HomeComponent,
    AddDocComponent,
    AdminDashboardComponent,
    FooterComponent,
    EditDocComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
