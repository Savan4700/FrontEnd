import { Component, OnInit } from '@angular/core';
import { LokSabhaCreateService } from './lok-sabha-create.service';
import { UtilsService } from '../../../shared/service/utils.service';

@Component({
  selector: 'app-lok-sabha-create',
  templateUrl: './lok-sabha-create.component.html',
  styleUrls: ['./lok-sabha-create.component.css']
})
export class LokSabhaCreateComponent implements OnInit {

  constructor(public lokSabhaCreateService: LokSabhaCreateService,public utilsService:UtilsService) { }
  
  ngOnInit() {
  }

}
