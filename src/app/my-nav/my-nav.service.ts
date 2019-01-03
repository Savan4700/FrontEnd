import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UtilsService } from '../shared/service/utils.service';
import { User } from '../Model/User';

@Injectable({
    providedIn: 'root'
})

export class MyNavService {
    
    profileUrl: String;
    name = "savan";
    user = new User();
    menuList = [
        {'menuName':'Dashboard','url':''},
        {'menuName':'About Us','url':''},
        {'menuName':'Contact Us','url':''}
    ];
    constructor(public utilsService: UtilsService) { }

    getUserProfile() {
        // if (this.user.mapOfOtherDetails && this.user.mapOfOtherDetails['nameOfUserType']) {
            // this.profileUrl = '/home/work_area/staff/profile';
        // }
        console.log(this.utilsService.getUserFromLocalStorage())
        this.user = this.utilsService.getUserFromLocalStorage();
        // console.log(this.user.name);

    }

    public logout() {
        localStorage.removeItem('users');
        localStorage.removeItem('token');
        // localStorage.removeItem('settingMenu');
        localStorage.removeItem('isAuthenticate');
        // this.router.navigate(['/signup/login']);
        this.utilsService.redirectTo('/signup-login/signup/login');
    }

}
