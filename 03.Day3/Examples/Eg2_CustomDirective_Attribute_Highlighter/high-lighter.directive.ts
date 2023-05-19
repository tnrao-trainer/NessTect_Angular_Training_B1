import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighLighter]'
})
export class HighLighterDirective implements OnInit {

  @Input()  appHighLighter = "";

  constructor(private el:ElementRef) {
    
   // this.el.nativeElement.style.backgroundColor = this.appHighLighter;
   }

   ngOnInit()
   {
     // alert(this.appHighLighter);
     //  this.el.nativeElement.style.backgroundColor = this.appHighLighter || "yellow";
     if(this.appHighLighter == "")
     {
        this.appHighLighter = "Yellow";
     }

      this.el.nativeElement.style.backgroundColor = this.appHighLighter
    }
}

