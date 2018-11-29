import { Component } from '@angular/core';
// import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UtilsService } from '../shared/service/utils.service';
import { MyNavService } from './my-nav.service';

@Component({
  selector: 'app-my-nav',
  templateUrl: './my-nav.component.html',
  styleUrls: ['./my-nav.component.css']
})
export class MyNavComponent {

  
  constructor( public utilsService: UtilsService,public myNavService:MyNavService) {
  }
  ngOnInit() {
    this.myNavService.getUserProfile();

  }
  
  }
