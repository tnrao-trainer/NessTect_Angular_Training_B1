import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Employee } from '../models/empModel';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent {

    empsArray:Employee[] = [];

    constructor(private dataService:DataService)
    {

    }

    getDataButton_click()
    {
      this.empsArray = this.dataService.getAllEmployees();
    }
}
