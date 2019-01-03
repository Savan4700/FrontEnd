import { Injectable } from '@angular/core';
import { FormMaster } from '../../Model/formData';
import { UtilsService } from '../../shared/service/utils.service';
import { serialize } from '../../../../node_modules/cerialize';
import { Serialize, Deserialize } from 'cerialize';
import { Router } from '../../../../node_modules/@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../../Model/User';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginParamOb: {
    username: string,
    password: string,
  } = {
      username: "",
      password: ""
    };
  errorCheck: boolean = false;
  submited: boolean = false;
  serverDown: boolean = false;
  form: FormGroup;
  constructor(public utilsService: UtilsService, public router: Router) { }
  resetVariable() {
    this.errorCheck = false;
    this.submited = false;
    this.serverDown = false;
    this.loginParamOb = {
      username: "",
      password: ""
    };
  }
  checkLoginForm() {
    console.log(this.loginParamOb);
    this.submited = true;
    this.serverDown = false;
    this.utilsService.postMethodAPI(true, 'auth/signin', this.loginParamOb, (response) => {
      console.log(response);
      this.submited = false;
      if (response != 'serverdown') {
        if (!this.utilsService.isNullUndefinedOrBlank(response.accessToken)) {
          this.errorCheck = false;
          this.setLocalStorage(response).then(() => {
            this.utilsService.redirectTo('/home/work_area/dashboard');
            this.resetVariable();
            // this.stompWebsocketService.sendLoginMsg(JSON.stringify({ 'sendUserName': 'test', 'msg': 'login Message' }));
          }
          );
        } else {
          this.errorCheck = true;
          // this.serverDown = true;
        }
      } else {
        this.serverDown = true;
      }
    });
  }

  setLocalStorage(res) {
    const promise = new Promise((resolve, reject) => {
      try {
        localStorage.setItem('users', Deserialize(JSON.stringify(res.userDetails), User));
        localStorage.setItem('token', res.accessToken);
        localStorage.setItem('isAuthenticate', 'true');
        resolve();
      } catch (error) {
        reject();
      }
    });
    return promise;
  }
}
