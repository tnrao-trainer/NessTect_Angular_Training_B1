import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'range'
})
export class RangePipe implements PipeTransform {

  transform(input:any[],  min:number, max:number): any[] {

    let output:any[] = [];

    output = input.filter(item => item.total >=min && item.total <= max);

    return output;
  }

}
