import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(input:string): string {
    let output:string  = "";
    // add logic to transform input data into output
    if(input == "m" || input == "M")  output = "Male";
    if(input == "f" || input == "F")  output = "Female";

    return output;
  }
}
