import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})

export class FilterPipe implements PipeTransform {
  transform(
    data: any[],
    filter: Object
    ): any {
    if (!data || !filter) {
      return data;
    }
    return data.filter(item => item.name.toLowerCase().indexOf(filter) !== -1);
  }
}
