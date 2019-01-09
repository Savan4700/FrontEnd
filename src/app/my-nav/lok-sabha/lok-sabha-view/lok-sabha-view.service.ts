import { Injectable } from '@angular/core';
import { LokSabha } from 'src/app/Model/LokSabha';
import { UtilsService } from 'src/app/shared/service/utils.service';
import { Deserialize } from 'cerialize';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LokSabhaViewService {
  listOfLokSabha: Array<LokSabha>;
  constructor(public utilsService: UtilsService, public router: Router) { }


  removeItem(id) {
    // this.utilsService.deleteMethodAPI(false, '', {}, (response) => {

    // });
  }

  goToEdit(id) {
    this.utilsService.CreateNotification('error', 'Error', 'Server down.');
    this.router.navigateByUrl('/home/work_area/lok-sabha/lok-sabha/' + id);
  }

  getAllLokSabha() {
    this.utilsService.getMethodAPI(
      true,
      'loksabha/getAllLoksabha',
      response => {
        console.log(response);
        this.listOfLokSabha = Deserialize(response, LokSabha);
      }
    );
  }
}
