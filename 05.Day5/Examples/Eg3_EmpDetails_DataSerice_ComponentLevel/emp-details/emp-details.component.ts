import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Employee } from '../models/empModel';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css'],
  providers :  [DataService]
})
export class EmpDetailsComponent {

  empObj:any;  

    constructor(private dataService:DataService)
    {

    }

    buttonClick()
    {
      this.empObj = this.dataService.getEmployeeById(6589);
    }


}
