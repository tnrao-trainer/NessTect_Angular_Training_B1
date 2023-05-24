import { Component } from '@angular/core';
import { Observable, from, map, of } from 'rxjs';

@Component({
  selector: 'app-rxjs-demo',
  templateUrl: './rxjs-demo.component.html',
  styleUrls: ['./rxjs-demo.component.css']
})
export class RxjsDemoComponent {

  observableObj:Observable<any>;

  constructor()
  {
      
    this.observableObj =  of(1,2,3,4,5);
  //  this.observableObj =  from([1,2,3,4,5,6]);
          
  }


  buttonClick()
  {
   
        this.observableObj.pipe( map(x => x * 2) ).subscribe(resData => 
        {
            console.log(resData);
        });
      
  }

}
