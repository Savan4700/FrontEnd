import { PipeTransform } from '@angular/core';
import { Pipe } from '@angular/core';

declare var $: any;
@Pipe({ name: 'orderBy' })
export class OrderBy implements PipeTransform {

  transform(obj: any, [fieldName = '+']): any {
    let isDescendingOrder = false;
    if (fieldName.indexOf('-') >= 0) {
      fieldName = fieldName.substr(1);
      isDescendingOrder = true;
    }
    if (!Array.isArray(obj)) {
      return obj;
    }
    if (!Array.isArray(fieldName) || (Array.isArray(fieldName) && fieldName.length === 1)) {
      // Descending
      if (isDescendingOrder) {
        if ($.isNumeric(obj[0][fieldName])) {
          return [...obj].sort((a, b) => b[fieldName] - a[fieldName]);
        }
        return [...obj].sort((a, b) => b[fieldName].localeCompare(a[fieldName]));
      }

      // Ascending
      if ($.isNumeric(obj[0][fieldName])) {
        return [...obj].sort((a, b) => a[fieldName] - b[fieldName]);
      }
      return [...obj].sort((a, b) => a[fieldName].localeCompare(b[fieldName]));
    }
  }
}

// Example: http://www.fueltravel.com/blog/migrating-from-angular-1-to-2-part-1-pipes/


