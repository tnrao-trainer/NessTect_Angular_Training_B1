import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmpsComponent } from './emps/emps.component';
import { DeptsComponent } from './depts/depts.component';
import { AboutusComponent } from './aboutus/aboutus.component'; 
import { DetailsComponent } from './details/details.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AdminModule } from './admin/admin.module';
 

@NgModule({
  declarations: [AppComponent, HomeComponent, EmpsComponent, DeptsComponent, AboutusComponent, DetailsComponent, LoginComponent, NotFoundComponent,   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
