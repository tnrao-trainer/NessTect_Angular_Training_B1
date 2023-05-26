import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmpsComponent } from './emps/emps.component';
import { DeptsComponent } from './depts/depts.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailsComponent } from './details/details.component';
import { AuthGuardService } from './auth-guard.service';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
 
const appRoutes: Routes = [
  {path : "", component : HomeComponent},
  {path : "Emps", component : EmpsComponent, canActivate : [AuthGuardService] },
  {path : "Depts", component : DeptsComponent, canActivate : [AuthGuardService] },
  {path : "Aboutus", component : AboutusComponent},
  {path : "Details/:id", component : DetailsComponent},
  {path : "Login", component : LoginComponent},
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  {path : "**", component : NotFoundComponent}, //  Invalid Routes- 404
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],  
  exports: [RouterModule]
})
export class AppRoutingModule { }
