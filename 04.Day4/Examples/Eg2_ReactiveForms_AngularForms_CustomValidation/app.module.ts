import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoComponent } from './demo/demo.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveForm2Component } from './reactive-form2/reactive-form2.component';
 
@NgModule({
  declarations: [
    AppComponent, 
    DemoComponent, TemplateFormComponent, ReactiveFormComponent, ReactiveForm2Component 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    FormsModule,  //  for ngModel
    ReactiveFormsModule  // for  formGroup, formControlName
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
