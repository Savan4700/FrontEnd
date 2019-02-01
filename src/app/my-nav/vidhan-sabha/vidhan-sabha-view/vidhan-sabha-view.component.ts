import { Component, OnInit } from '@angular/core';
import { VidhanSabhaViewService } from './vidhan-sabha-view.service';
import { UtilsService } from 'src/app/shared/service/utils.service';
declare var $: any;
@Component({
  selector: 'app-vidhan-sabha-view',
  templateUrl: './vidhan-sabha-view.component.html',
  styleUrls: ['./vidhan-sabha-view.component.css']
})
export class VidhanSabhaViewComponent implements OnInit {

  constructor(public vidhanSabhaViewService: VidhanSabhaViewService, public utilsService: UtilsService) { }

  ngOnInit() {
    // this.vidhanSabhaViewService.getAllLokSabha();
    this.vidhanSabhaViewService.getListOFVidhanSabha();
  }


}
