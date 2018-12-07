// import { UtilsService } from './../shared/service/utils.service';
import { Injectable } from '@angular/core';
import { CanDeactivate, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UtilsService } from '../shared/service/utils.service';
export interface CanComponentDeactivate {
    canDeactivate: () => Promise<boolean> | boolean;
}
@Injectable()
export class AuthGuard implements CanActivate , CanDeactivate<CanComponentDeactivate> {

    constructor(
        public utilsService: UtilsService,
        public router: Router
    ) {

    }
    canDeactivate(
        component: CanComponentDeactivate, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot,
         nextState?: RouterStateSnapshot): boolean | Promise<boolean> {
             console.log('activedsss');
        return component.canDeactivate ? component.canDeactivate() : true;
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        try {
            console.log(route);
            if ( route.routeConfig.path === 'work_area') {
                if (this.utilsService.isAuthenticated()) {
                    return true;
                } else {
                    // this.utilsService.logoutLink();
                }
            } else {
                if (this.utilsService.isAuthenticated()) {
                    // this.utilsService.signin();
                } else {
                    console.log('this is true');
                    return true;
                }
            }


        } catch (error) {
            return false;
        }
    }
}