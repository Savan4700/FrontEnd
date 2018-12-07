import { Injectable } from '@angular/core';
import { FormMaster } from '../../Model/formData';
import { UtilsService } from '../../shared/service/utils.service';
import { serialize } from '../../../../node_modules/cerialize';
import { Serialize, Deserialize } from 'cerialize';
import { Router } from '../../../../node_modules/@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginParamOb: {
        email: string,
        password: string,
        } = {
        email: '',
        password: ''
      };
      form: FormGroup;
  constructor(public utilsService: UtilsService, public router: Router) { }

  checkLoginForm() {
    console.log(this.loginParamOb);
    this.utilsService.getMethodAPI( 'customers' , '', (response) => {
      console.log(response);
    //   if (!this.utilsService.isNullUndefinedOrBlank(response)) {
    //     console.log('hey');
        // localStorage.setItem('users', Deserialize(JSON.stringify(response), FormMaster));
        // localStorage.setItem('users', 'resopmse');
        // this.router.navigate(['/home/work_area/dash']);
    //   }
    });
  }
}
