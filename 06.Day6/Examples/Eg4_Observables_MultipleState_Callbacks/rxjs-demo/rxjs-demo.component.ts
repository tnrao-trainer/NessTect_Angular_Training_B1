import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs-demo',
  templateUrl: './rxjs-demo.component.html',
  styleUrls: ['./rxjs-demo.component.css']
})
export class RxjsDemoComponent {

  observableObj:Observable<string>;

  constructor()
  {
    this.observableObj = new Observable( (subscriber) => {     
        
      subscriber.next("Data generated by observable -- 1");
      subscriber.next("Data generated by observable -- 2");

     

      setTimeout(
        () =>  {
          
          let x = 6;
          if( x % 2 == 1) {
            subscriber.error("Error Occurred while processing observable");
          }


          subscriber.next("Data generated by observable -- 3");
          subscriber.complete();
        }, 3000);  // wait the process for 3 sec
    });         
          
  }


  buttonClick()
  {
      console.log("Before Subscribe --- Line26");

      this.observableObj.subscribe({
       next :  (result:any) =>  {
          console.log("Response from Observable: " + result);          
              },
       error : (error:any) =>  {
        console.log("Error from Observable: " + error);          
              },
        complete : () => {
          console.log("Observable send all data.");      
         }
      });


      console.log("After Subscribe --- Line52");
  }

}
