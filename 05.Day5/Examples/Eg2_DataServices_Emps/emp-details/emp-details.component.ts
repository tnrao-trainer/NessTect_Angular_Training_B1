import { Component } from '@angular/core';
import { Employee } from '../models/empModel';
import { DataService} from '../data.service';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']

})
export class EmpDetailsComponent {

    empObj:Employee | undefined;  

    constructor(public dataService:DataService)
    {

    }

    getDataButton_click()
    {
      this.empObj = this.dataService.getEmployeeById(6589);
    }

}
