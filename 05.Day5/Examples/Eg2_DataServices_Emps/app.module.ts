import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoComponent } from './demo/demo.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveForm2Component } from './reactive-form2/reactive-form2.component';
import { DataService } from './data.service';
import { EmpListComponent } from './emp-list/emp-list.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { EmpDataService } from './emp-data.service';
 
 
@NgModule({
  declarations: [
    AppComponent, 
    DemoComponent, TemplateFormComponent, ReactiveFormComponent, ReactiveForm2Component, EmpListComponent, EmpDetailsComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    FormsModule,  //  for ngModel
    ReactiveFormsModule  // for  formGroup, formControlName
  ],
  providers: [
					//{ provide :  DataService,  useClass : EmpDataService  } 
		],
  bootstrap: [AppComponent]
})
export class AppModule { }


