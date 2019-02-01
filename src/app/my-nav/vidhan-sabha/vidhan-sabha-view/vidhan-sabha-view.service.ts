import { Injectable } from '@angular/core';
import { LokSabha } from 'src/app/Model/LokSabha';
import { UtilsService } from 'src/app/shared/service/utils.service';
import { Router } from '@angular/router';
import { Deserialize } from 'cerialize';
import { VidhanSabha } from 'src/app/Model/VidhanSabha';
declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class VidhanSabhaViewService {
  listOfVidhanSabha: Array<VidhanSabha>;
  constructor(public utilsService: UtilsService, public router: Router) { }


  removeItem(id) {
    // this.utilsService.deleteMethodAPI(false, '', {}, (response) => {
      // #deleteVidhanSabha
      console.log('hey');
      // $('#deleteVidhanSabha').modal('show');
    // });
  }

  deleteVidhanSabha() {
    console.log('delte sucess');
  }

  goToEdit(id) {
    this.utilsService.CreateNotification('error', 'Error', 'Server down.');
    this.router.navigateByUrl('/home/work_area/vidhan-sabha/vidhan-sabha/' + id);
  }


  getListOFVidhanSabha() {
    this.utilsService.getMethodAPI(
      true,
      'vidhansabha/getAllVidhansabha',
      response => {
        console.log(response);
        this.listOfVidhanSabha = Deserialize(response, VidhanSabha);
      }
    );
  }
}
