import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myFilter'
})
export class MyFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.filter((item) => item.title.indexOf(args) !== -1);
  }

}
