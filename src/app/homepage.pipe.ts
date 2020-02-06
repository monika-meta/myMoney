import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'homepage'
})
export class HomepagePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
