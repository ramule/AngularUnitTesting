import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enclosePipe'
})
export class EnclosePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    console.log(args);
    if(args.length > 0 && args[0] !== '') {
      if(args[0] === 'curly') {
        return '{'+value+'}';
      } else if(args[0] === 'simple') {
        return '('+value+')';
      } else {
        return '['+value+']';
      }
    }
    return value;
  }

}
