import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Student } from '../models/studentModel';

@Component({
  selector: 'app-http-demo4',
  templateUrl: './http-demo4.component.html',
  styleUrls: ['./http-demo4.component.css']
})
export class HttpDemo4Component {

  studentsArray:Student[] = [];

  constructor(private dataService:DataService){

  }

  getData1_click()
  {
      this.dataService.getTypedData().subscribe( 
      {
          next : (resData:Student[]) =>
          {
            this.studentsArray = resData;
          },
          error :  (errorMsg:any) =>
          {
             alert(errorMsg.message);
             console.log(errorMsg);
          }
      } );
  }

  getData2_click()
  {
      this.dataService.getStudentsByCity().subscribe( (resData:Student[]) =>
      {
        this.studentsArray = resData;
      });
  }

  getData3_click()
  {
      this.dataService.getStudentsWithToken().subscribe( (resData:Student[]) =>
      {
        this.studentsArray = resData;
      });
  }
}
