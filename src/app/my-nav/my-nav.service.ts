import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class MyNavService {

    profileUrl: String;
    user = {};
    menuList = [
        {'menuName':'Dashboard','url':''},
        {'menuName':'About Us','url':''},
        {'menuName':'Contact Us','url':''}
    ];
    constructor(public router: Router) { }

    getUserProfile() {
        // if (this.user.mapOfOtherDetails && this.user.mapOfOtherDetails['nameOfUserType']) {
            this.profileUrl = '/home/work_area/staff/profile';
        // }
    }

}
