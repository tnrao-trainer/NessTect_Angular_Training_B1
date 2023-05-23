import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { HelloService } from './hello.service';
import { EmpsListComponent } from './emps-list/emps-list.component';
import { DataService } from './data.service';
import { EmpDbDataService } from './emp-db-data.service';
 
 
@NgModule({
  declarations: [
    AppComponent,
    EmpDetailsComponent,
    EmpsListComponent, 
       ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    FormsModule,  //  for ngModel
    ReactiveFormsModule  // for  formGroup, formControlName
  ],
  providers: [ 
        HelloService, 
        {provide : DataService, useClass : EmpDbDataService} 
        ],  // for Services
  bootstrap: [AppComponent]
})
export class AppModule { }


