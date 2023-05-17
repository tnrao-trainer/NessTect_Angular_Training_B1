import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(input:any[], dno:number): any[] {
    let output:any[] = [];

    if(dno == -1)
       output = input;
    else
      output  = input.filter( item => item.deptno == dno);

    return output;
  }

}
