// import * as _ from 'lodash';
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'ShowNotiTime'
})
export class ShowNotiTimePipe implements PipeTransform {

    constructor() {

    }

    transform(Dbdate: String, args: String) {
        const date: number = new Date().getDate();
        const month: number = new Date().getMonth() + 1;
        const year: number = new Date().getFullYear();

        const newDBdate = new Date(Dbdate.toString());
        const dbDay = newDBdate.getDate();
        const dbMonth = newDBdate.getMonth() + 1;
        const dbYear = newDBdate.getFullYear();
        if (date === dbDay && month === dbMonth && year === dbYear) {
            return newDBdate.toLocaleTimeString();
        } else {
            return newDBdate.toLocaleString();
        }
    }
}
