import { Injectable } from '@angular/core';
import { Employee } from './models/empModel';
import { empData } from './data';

@Injectable( )
export class DataService {

  empDataArray:Employee[] = [];

  constructor() {
      this.empDataArray = empData;
   }

  public getAllEmployees():Employee[]
  {
    return this.empDataArray;
  }

  public getEmployeeById(id:number) : Employee | undefined
  {    
    return this.empDataArray.find(item => item.empno == id);   
  }

}
