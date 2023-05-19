import { Component } from '@angular/core';
import { Student } from '../models/studentModel';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent {

  displayMode:string  = "List";

  public  studentsArray:Student[] = [
      {sname  :  "Scott", course : "Angular"},
      {sname  :  "Smith", course : "HTML5"},
      {sname  :  "Smith", course : "React JS"},
      {sname  :  "James", course : "Angular"},
      {sname  :  "Adam", course : "Java Script"},
      {sname  :  "Sathya", course : "React JS"},
      {sname  :  "Mark", course : "Angular"},
      {sname  :  "Peter", course : "HTML5"},
      {sname  :  "Maneesh", course : "React JS"},
      {sname  :  "Ramesh", course : "Angular"},
      {sname  :  "Vinush", course : "Java Script"},
      {sname  :  "Haneesh", course : "React JS"}
     ]; 

}
