import { Component } from '@angular/core';
// import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UtilsService } from '../shared/service/utils.service';
import { MyNavService } from './my-nav.service';
declare var $: any;
@Component({
  selector: 'app-my-nav',
  templateUrl: './my-nav.component.html',
  styleUrls: ['./my-nav.component.css']
})
export class MyNavComponent {


  constructor(public utilsService: UtilsService, public myNavService: MyNavService) {
  }
  ngOnInit() {
    this.myNavService.getUserProfile();
    this.loadScript('../assets/js/sidebarmenu.js');
    this.loadScript('../assets/js/custom.min.js');
    setTimeout(() => {
      $('#sidebarnav li').removeClass('active');
    }, 500);
  }
  public loadScript(url: string) {
    const body = <HTMLDivElement>document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }

}
