import { Injectable } from '@angular/core';
import { LokSabha } from '../../../Model/LokSabha';
import { UtilsService } from 'src/app/shared/service/utils.service';
import { Serialize } from 'cerialize';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LokSabhaCreateService {
  errors: Array<string> = new Array<string>();
  textForAddorUpdate = 'New';
  lokSabha = new LokSabha();
  submited: boolean;
  form: FormGroup;
  opertaion: string;
  constructor(public utilsService: UtilsService, public router: Router) { }

  hideErrorDiv() {
    this.errors = new Array<string>();
  }
  resetVariable() {
    this.lokSabha = new LokSabha();
    this.submited = false;
  }

  getbyId() {
    console.log('get perticuler');
  }

  insertLokSabha() {
    console.log(this.lokSabha);
    this.submited = true;
    const lokSabhaDetail = Serialize(this.lokSabha, LokSabha);
    if (this.opertaion === '') {
      this.utilsService.postMethodAPI(
        true,
        'loksabha/saveLoksabha',
        lokSabhaDetail,
        response => {
          this.submited = false;
          console.log(response);
          if (response) {
            this.utilsService.gotoBackPage();
          }
        }
      );
    } else {
      this.utilsService.putMethodAPI(false, '', lokSabhaDetail, '', (res) => {
        console.log(res);
        if (res) {
          this.utilsService.gotoBackPage();
        }
      });
    }
  }
}
