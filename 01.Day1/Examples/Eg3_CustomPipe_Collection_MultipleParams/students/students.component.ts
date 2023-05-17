import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {

  min:number =  100;
  max:number =  1000;

  public  studentsArray:any[]  = [
    {sid :  1025,  sname :  "Scott-1", total :  582},
    {sid :  1026,  sname :  "Scott-2", total :  482},
    {sid :  1027,  sname :  "Scott-3", total :  682},
    {sid :  1028,  sname :  "Scott-4", total :  582},
    {sid :  1029,  sname :  "Scott-5", total :  982},
    {sid :  1020,  sname :  "Scott-6", total :  462},
    {sid :  1021,  sname :  "Scott-7", total :  682},
    {sid :  1022,  sname :  "Scott-8", total :  782},
    ];
  

}
