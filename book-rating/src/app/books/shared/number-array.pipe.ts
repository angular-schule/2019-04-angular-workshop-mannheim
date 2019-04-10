import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberArray'
})
export class NumberArrayPipe implements PipeTransform {

  transform(value: number) {
    return new Array(value);
  }
}
