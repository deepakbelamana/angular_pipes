import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any,filterString:string,propName:string){
    const filteredItems =[]
    if (filterString.length === 0) {
      return value;
    } else {

      for(const item of value) {
        if(item[propName]===filterString) {
          filteredItems.push(item)
        }
      }
    }
    return filteredItems;
  }

}
