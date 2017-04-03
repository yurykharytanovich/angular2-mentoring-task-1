import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const minutes = value % 60;
    const hours = (value - minutes)/60;

    return args.replace(hours ? 'hh ' : 'hh h ', hours ? hours : '').replace('mm ', minutes);
  }

}
