import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  str:string  = "";
 
   constructor(private dataService:DataService){

   }

   button_click()
   {
      this.str  = this.dataService.getMessage();      
   }
}
