import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myOrderBy'
})
export class MyOrderByPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    value.sort((a: any, b: any) => {
      if (a[args] < b[args]) {
        return -1;
      } else if (a[args] > b[args]) {
        return 1;
      } else {
        return 0;
      }
    });
    return value;
  }

}
