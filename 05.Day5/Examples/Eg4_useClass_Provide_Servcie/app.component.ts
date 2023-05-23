import { Component } from '@angular/core';
import { HelloService } from './hello.service';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
 
})
export class AppComponent {

    message:string  = "";
    username:string  = "";

    constructor(private helloService:HelloService)
    {

    }

    buttonClick()
    {
      this.message  =   this.helloService.greeting(this.username);
      // alert(this.message);
    }

  
}
