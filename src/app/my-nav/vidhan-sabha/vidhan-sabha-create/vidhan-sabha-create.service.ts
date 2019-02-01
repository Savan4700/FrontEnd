import { Injectable } from '@angular/core';
import { LokSabha } from 'src/app/Model/LokSabha';
import { VidhanSabha } from 'src/app/Model/VidhanSabha';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilsService } from 'src/app/shared/service/utils.service';
import { Serialize, Deserialize } from 'cerialize';

@Injectable({
  providedIn: 'root'
})
export class VidhanSabhaCreateService {
  errors: Array<string> = new Array<string>();
  textForAddorUpdate = 'New';
  vidhanSabha = new VidhanSabha();
  listOfLokSabha: Array<LokSabha>;
  submited: boolean;
  form: FormGroup;
  opertaion: string;
  idOfLokSabha: string;
  constructor(public utilsService: UtilsService, public router: Router) { }

  hideErrorDiv() {
    this.errors = new Array<string>();
  }
  resetVariable() {
    this.vidhanSabha = new VidhanSabha();
    this.submited = false;
  }

  getbyId() {
    console.log('get perticuler');
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

  insertVidhanSabha() {
    console.log(this.vidhanSabha);
    this.submited = true;
    const vidhanSabhaDetail = Serialize(this.vidhanSabha, VidhanSabha);
    if (this.opertaion === '') {
      this.utilsService.postMethodAPI(
        true,
        'vidhansabha/saveVidhansabha',
        vidhanSabhaDetail,
        response => {
          this.submited = false;
          console.log(response);
          if (response) {
            this.utilsService.gotoBackPage();
          }
        }
      );
    } else {
      this.utilsService.putMethodAPI(false, '', vidhanSabhaDetail, '', (res) => {
        console.log(res);
        if (res) {
          this.utilsService.gotoBackPage();
        }
      });
    }
  }
}
