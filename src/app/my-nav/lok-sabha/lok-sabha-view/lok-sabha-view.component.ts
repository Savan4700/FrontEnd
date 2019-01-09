import { Component, OnInit } from '@angular/core';
import { LokSabhaViewService } from './lok-sabha-view.service';

@Component({
  selector: 'app-lok-sabha-view',
  templateUrl: './lok-sabha-view.component.html',
  styleUrls: ['./lok-sabha-view.component.css']
})
export class LokSabhaViewComponent implements OnInit {

  constructor(public lokSabhaViewService: LokSabhaViewService) { }

  ngOnInit() {
    this.lokSabhaViewService.getAllLokSabha();
  }

}
