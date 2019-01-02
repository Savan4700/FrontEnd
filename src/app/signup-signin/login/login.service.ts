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
  form: FormGroup;
  constructor(public utilsService: UtilsService, public router: Router) { }

  checkLoginForm() {
    console.log(this.loginParamOb);
    this.utilsService.postMethodAPI(true, 'auth/signin', this.loginParamOb, (response) => {
      console.log(response);
      if (!this.utilsService.isNullUndefinedOrBlank(response)) {
        this.setLocalStorage(response).then(() => {
          this.utilsService.redirectTo('/home/work_area/dashboard');
          // this.stompWebsocketService.sendLoginMsg(JSON.stringify({ 'sendUserName': 'test', 'msg': 'login Message' }));
        }
        );
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
