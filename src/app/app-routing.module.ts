import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocListComponent } from './doc-list/doc-list.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddDocComponent } from './add-doc/add-doc.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { EditDocComponent } from './edit-doc/edit-doc.component';

const routes: Routes = [
  {path:"doc-list",component: DocListComponent},
  {path:"home",component: HomeComponent},
  {path:"adminDash",component: AdminDashboardComponent},
  {path:"doc-list/addDoc",component: AddDocComponent},
  {path:"adminDash/addDoc",component: AddDocComponent},
  {path:"editDoc/:id",component: EditDocComponent},
  {path:'',redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
