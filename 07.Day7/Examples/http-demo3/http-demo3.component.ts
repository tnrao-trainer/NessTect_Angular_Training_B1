import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-http-demo3',
  templateUrl: './http-demo3.component.html',
  styleUrls: ['./http-demo3.component.css']
})
export class HttpDemo3Component {

  name:string  = "";
  city:string  = "";
  email:string  = "";
  age:number = 0;
  studentId:number = 0;

  studentsArray:any[] = [];

  constructor(private dataService:DataService){

  }

  getData_click()
  {
      this.dataService.getAllStudents().subscribe( (resData:any) =>
      {
        this.studentsArray = resData;
      } );
  }

  addData_click() {
    let stObj:any = {};
    stObj.studentId = 0;
    stObj.name = this.name;
    stObj.city = this.city;
    stObj.email = this.email;
    stObj.age = this.age;

   //  console.log(stObj);

    this.dataService.addStudent(stObj).subscribe( (resData:any) =>
    {
      alert("New Student details are added to database");
      this.getData_click();
    });
  }

  updateData_click() {
    let stObj:any = {};
    stObj.studentId = this.studentId;
    stObj.name = this.name;
    stObj.city = this.city;
    stObj.email = this.email;
    stObj.age = this.age;

    // console.log(stObj);

    this.dataService.updateStudent(stObj).subscribe( (resData:any) =>
    {
       alert("Student details are update to database");
      this.getData_click();
    });
  }


  deleteData_click(sid:number) {

    this.dataService.deleteStudent(sid).subscribe( (resData:any) =>
    {
      alert("Student details are deleted from database");
      this.getData_click();
    });

  }

  selectData_click(sid:number) {

    this.studentId = sid;
    
    this.dataService.getStudentById(sid).subscribe( (resData:any) =>
    {
      this.name = resData.name;
      this.email = resData.email;
      this.city = resData.city;
      this.age = resData.age;
    });
  }


  clearFields() {
    this.name = "";
    this.email = "";
    this.city = "";
    this.age = 0;
  }
}
