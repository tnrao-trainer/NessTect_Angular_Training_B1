import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Dept } from '../models/deptModel';

@Component({
  selector: 'app-dept-details',
  templateUrl: './dept-details.component.html',
  styleUrls: ['./dept-details.component.css']
})
export class DeptDetailsComponent {

  // @Input() deptObj:Dept = {deptno : 10, dname : "Accounts", loc : "Hyd"};
  @Input() deptObj:Dept = new Dept();
  @Output()  onDeptRemove:EventEmitter<number> = new EventEmitter();


  deptRemove_child()
  {
    // alert("Message from Child Component method - deptRemove_child");
    this.onDeptRemove.emit(this.deptObj.deptno);
  }

}
