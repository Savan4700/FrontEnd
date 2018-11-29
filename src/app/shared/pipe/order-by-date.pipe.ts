// import * as _ from 'lodash';
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'OrderByDate'
})
export class OrderByDatePipe implements PipeTransform {
    constructor() {
    }
    transform(array: Array<string>, args: String): Array<string> {

        if (!array || array === undefined || array.length === 0) { return null; }

        array.sort((a: any, b: any) => {
            const fd = a.createdDate;
            const ffd = new Date(fd);
            const sd = b.createdDate;
            const fsd = new Date(sd);
            if (args === 'lifo') {
                if (ffd < fsd) {
                    return 1;
                } else if (ffd > fsd) {
                    return -1;
                } else {
                    return 0;
                }
            } else {
                if (ffd > fsd) {
                    return 1;
                } else if (ffd < fsd) {
                    return -1;
                } else {
                    return 0;
                }
            }

        });
        return array;
    }
}
